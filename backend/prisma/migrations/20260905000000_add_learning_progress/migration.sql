CREATE TYPE "ProgressKind" AS ENUM ('LESSON', 'LAB');
CREATE TYPE "ProgressStatus" AS ENUM ('COMPLETED', 'IN_PROGRESS');

CREATE TABLE "LearningProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clientRecordId" TEXT NOT NULL,
    "kind" "ProgressKind" NOT NULL,
    "resourceId" TEXT NOT NULL,
    "status" "ProgressStatus" NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "LearningProgress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "LearningProgress_userId_clientRecordId_key" ON "LearningProgress"("userId", "clientRecordId");
CREATE INDEX "LearningProgress_userId_kind_resourceId_idx" ON "LearningProgress"("userId", "kind", "resourceId");
CREATE INDEX "LearningProgress_userId_updatedAt_idx" ON "LearningProgress"("userId", "updatedAt");

ALTER TABLE "LearningProgress" ADD CONSTRAINT "LearningProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
