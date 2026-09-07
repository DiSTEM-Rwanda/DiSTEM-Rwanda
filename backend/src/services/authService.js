import bcrypt from 'bcryptjs'

import { prisma } from '../config/prisma.js'

import { HttpError } from '../utils/httpError.js'

import { createToken, hashToken } from '../utils/session.js'

import { sendVerificationEmail } from './emailService.js'

const publicUser = (user) => ({
  id: user.id,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  roles: user.roles.map(({ role }) => role.name)
})

const userInclude = {
  roles: {
    include: {
      role: true
    }
  }
}

const systemRoles = [
  'STUDENT',
  'TEACHER',
  'SCHOOL_ADMIN',
  'PLATFORM_ADMIN'
]


async function ensureRoles() {
  await prisma.$transaction(
    systemRoles.map((name) =>
      prisma.role.upsert({
        where: { name },
        update: {},
        create: { name }
      })
    )
  )
}

export async function register(input) {
  const email = input.email.trim().toLowerCase()

  const exists = await prisma.user.findUnique({
    where: { email }
  })

  if (exists) {
    throw new HttpError(
      409,
      'An account with that email already exists.'
    )
  }

  await ensureRoles()

  const student = await prisma.role.findUnique({
    where: { name: 'STUDENT' }
  })

  if (!student) {
    throw new HttpError(
      500,
      'Authentication service is unavailable.'
    )
  }

  const passwordHash = await bcrypt.hash(input.password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      passwordHash,
      roles: {
        create: {
          roleId: student.id
        }
      }
    },
    include: userInclude
  })

  const verification = await createVerificationToken(user.id)

  await sendVerificationEmail({
    to: user.email,
    firstName: user.firstName,
    verificationToken: verification.token
  })

  return {
    user: publicUser(user)
  }
}

export async function login(email, password, ttlDays, { allowUnverified = false } = {}) {
  const user = await prisma.user.findUnique({
    where: {
      email: email.trim().toLowerCase()
    },
    include: userInclude
  })

  if (
    !user ||
    !(await bcrypt.compare(password, user.passwordHash)) ||
    !user.isActive
  ) {
    throw new HttpError(401, 'Invalid email or password.')
  }

  if (!allowUnverified && !user.emailVerifiedAt) {
    throw new HttpError(
      403,
      'Please verify your email address before signing in.'
    )
  }

  const token = createToken()

  await prisma.session.create({
    data: {
      tokenHash: hashToken(token),
      userId: user.id,
      expiresAt: new Date(Date.now() + ttlDays * 86400000)
    }
  })

  return {
    token,
    user: publicUser(user)
  }
}

async function createVerificationToken(userId, ttlHours = 24) {
  await prisma.emailVerificationToken.updateMany({
    where: {
      userId,
      usedAt: null
    },
    data: {
      usedAt: new Date()
    }
  })

  const token = createToken()

  await prisma.emailVerificationToken.create({
    data: {
      tokenHash: hashToken(token),
      userId,
      expiresAt: new Date(Date.now() + ttlHours * 3600000)
    }
  })

  return {
    token
  }
}

export async function resendVerification(email, ttlHours = 24) {
  const user = await prisma.user.findUnique({
    where: {
      email: email.trim().toLowerCase()
    }
  })

  if (!user || user.emailVerifiedAt || !user.isActive) {
    return {
      success: true
    }
  }

  const verification = await createVerificationToken(
    user.id,
    ttlHours
  )

  await sendVerificationEmail({
    to: user.email,
    firstName: user.firstName,
    verificationToken: verification.token
  })

  return {
    success: true
  }
}

export async function verifyEmail(token) {
  if (!token) {
    throw new HttpError(
      400,
      'This verification link is invalid or no longer available.'
    )
  }

  const record = await prisma.emailVerificationToken.findUnique({
    where: {
      tokenHash: hashToken(token)
    },
    include: {
      user: true
    }
  })

  if (!record || record.usedAt) {
    throw new HttpError(
      400,
      'This verification link is invalid or no longer available.'
    )
  }

  if (record.expiresAt <= new Date()) {
    throw new HttpError(
      400,
      'This verification link has expired.'
    )
  }

  if (record.user.emailVerifiedAt) {
    await prisma.emailVerificationToken.update({
      where: {
        id: record.id
      },
      data: {
        usedAt: new Date()
      }
    })

    throw new HttpError(
      409,
      'Your email address is already verified.'
    )
  }

  await prisma.$transaction([
    prisma.user.update({
      where: {
        id: record.userId
      },
      data: {
        emailVerifiedAt: new Date()
      }
    }),

    prisma.emailVerificationToken.update({
      where: {
        id: record.id
      },
      data: {
        usedAt: new Date()
      }
    })
  ])

  return {
    success: true
  }
}

export async function forgotPassword(
  email,
  resetTokenTtlMinutes = 60
) {
  // Don't reveal if email exists - return same response for all inputs
  const user = await prisma.user.findUnique({
    where: {
      email: email.trim().toLowerCase()
    }
  })

  if (!user) {
    return {
      success: true
    }
  }

  // Invalidate previous reset tokens for this user
  await prisma.passwordResetToken.updateMany({
    where: {
      userId: user.id,
      usedAt: null
    },
    data: {
      usedAt: new Date()
    }
  })

  // Create new reset token
  const token = createToken()

  const expiresAt = new Date(
    Date.now() + resetTokenTtlMinutes * 60000
  )

  await prisma.passwordResetToken.create({
    data: {
      tokenHash: hashToken(token),
      userId: user.id,
      expiresAt
    }
  })

  return {
    success: true,
    token,
    userId: user.id
  }
}

export async function resetPassword(input) {
  const token = input.token

  if (!token) {
    throw new HttpError(
      400,
      'Reset token is required.'
    )
  }

  const tokenHash = hashToken(token)

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: {
      tokenHash
    },
    include: {
      user: true
    }
  })

  if (!resetToken) {
    throw new HttpError(
      400,
      'This password reset link is invalid or has expired. Please request a new one.'
    )
  }

  if (resetToken.usedAt) {
    throw new HttpError(
      400,
      'This password reset link is no longer valid. Please request a new one.'
    )
  }

  if (new Date() > resetToken.expiresAt) {
    throw new HttpError(
      400,
      'This password reset link has expired. Please request a new one.'
    )
  }

  const user = resetToken.user

  if (!user.isActive) {
    throw new HttpError(
      401,
      'This account is not active.'
    )
  }

  // Hash new password
  const passwordHash = await bcrypt.hash(input.password, 12)

  // Update password and mark token as used
  await prisma.$transaction([
    prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        passwordHash
      }
    }),

    prisma.passwordResetToken.update({
      where: {
        id: resetToken.id
      },
      data: {
        usedAt: new Date()
      }
    })
  ])

  return {
    success: true
  }
}

export async function revoke(token) {
  if (token) {
    await prisma.session.deleteMany({
      where: {
        tokenHash: hashToken(token)
      }
    })
  }
}

export { publicUser }
