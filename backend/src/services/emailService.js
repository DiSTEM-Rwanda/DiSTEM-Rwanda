import { Resend } from 'resend'

import { env } from '../config/env.js'
import { HttpError } from '../utils/httpError.js'

const resend = new Resend(env.resendApiKey)

export async function sendVerificationEmail({
  to,
  firstName,
  verificationToken
}) {
  const verificationUrl =
    `${env.frontendUrl}/verify-email?token=${encodeURIComponent(verificationToken)}`

  try {
    const { data, error } = await resend.emails.send({
      from: env.resendFromEmail,
      to: [to],
      subject: 'Verify your DiSTEM Rwanda account',
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to DiSTEM Rwanda, ${firstName}!</h2>

        <p>Thank you for creating your account.</p>

        <p>
          Please verify your email address by clicking the button below:
        </p>

        <p>
          <a
            href="${verificationUrl}"
            style="
              display: inline-block;
              padding: 12px 20px;
              background: #004080;
              color: #ffffff;
              text-decoration: none;
              border-radius: 6px;
            "
          >
            Verify My Email
          </a>
        </p>

        <p>
          This verification link will expire in 24 hours.
        </p>

        <p>
          If you did not create a DiSTEM Rwanda account, you can safely ignore this email.
        </p>

        <p>
          Regards,<br />
          <strong>DiSTEM Rwanda Team</strong>
        </p>
      </div>
      `
    })

    if (error) {
      throw error
    }

    return data
  } catch {
    throw new HttpError(
      503,
      'Verification email could not be delivered. Please try again shortly.'
    )
  }
}
