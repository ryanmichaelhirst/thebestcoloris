-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL DEFAULT (concat('vote_', gen_random_uuid()))::TEXT,
    "color" TEXT NOT NULL,
    "comment" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_uid_key" ON "Vote"("uid");
