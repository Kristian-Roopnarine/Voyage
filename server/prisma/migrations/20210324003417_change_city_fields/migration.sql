/*
  Warnings:

  - Added the required column `name` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "lat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "lng" SET DATA TYPE DOUBLE PRECISION;
