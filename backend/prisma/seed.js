import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const roles = ['STUDENT', 'TEACHER', 'SCHOOL_ADMIN', 'PLATFORM_ADMIN']
await Promise.all(roles.map((name) => prisma.role.upsert({ where: { name }, update: {}, create: { name } })))
await prisma.$disconnect()
