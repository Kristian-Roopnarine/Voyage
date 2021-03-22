/*
  Warnings:

  - You are about to drop the column `stateName` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `stateId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `cityId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `cityId` on the `Itinerary` table. All the data in the column will be lost.
  - Added the required column `city_id` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country_id` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city_id` to the `Itinerary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Itinerary" DROP CONSTRAINT "Itinerary_cityId_fkey";

-- AlterTable
ALTER TABLE "City" DROP COLUMN "stateName",
DROP COLUMN "stateId",
DROP COLUMN "cityId",
DROP COLUMN "countryId",
ADD COLUMN     "state_name" TEXT,
ADD COLUMN     "state_id" TEXT,
ADD COLUMN     "city_id" TEXT NOT NULL,
ADD COLUMN     "country_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Itinerary" DROP COLUMN "cityId",
ADD COLUMN     "city_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itinerary" ADD FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
