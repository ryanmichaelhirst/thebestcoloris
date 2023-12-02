-- AlterTable
ALTER TABLE "GeoLocation" ALTER COLUMN "uid" SET DEFAULT (concat('geo_', gen_random_uuid()))::TEXT;

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "author" TEXT,
ALTER COLUMN "uid" SET DEFAULT (concat('vote_', gen_random_uuid()))::TEXT;
