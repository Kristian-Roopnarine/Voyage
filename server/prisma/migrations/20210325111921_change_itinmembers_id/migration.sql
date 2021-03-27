/*
  Warnings:

  - The migration will change the primary key for the `ItineraryMembers` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ItineraryMembers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ItineraryMembers" DROP CONSTRAINT "ItineraryMembers_pkey",
DROP COLUMN "id",
ADD PRIMARY KEY ("user_id", "itinerary_id");
