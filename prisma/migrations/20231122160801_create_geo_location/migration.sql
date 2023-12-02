-- AlterTable
ALTER TABLE "Vote" ALTER COLUMN "uid" SET DEFAULT (concat('vote_', gen_random_uuid()))::TEXT;

-- CreateTable
CREATE TABLE "GeoLocation" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL DEFAULT (concat('geo_', gen_random_uuid()))::TEXT,
    "countryCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "countryFlag" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "stateCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "voteId" INTEGER NOT NULL,

    CONSTRAINT "GeoLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GeoLocation_uid_key" ON "GeoLocation"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "GeoLocation_voteId_key" ON "GeoLocation"("voteId");

-- AddForeignKey
ALTER TABLE "GeoLocation" ADD CONSTRAINT "GeoLocation_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
