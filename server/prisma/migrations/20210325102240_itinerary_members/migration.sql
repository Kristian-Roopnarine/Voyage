-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CREATOR', 'MEMBER', 'READ_ONLY');

-- CreateTable
CREATE TABLE "ItineraryMembers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "itinerary_id" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItineraryMembers" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryMembers" ADD FOREIGN KEY ("itinerary_id") REFERENCES "Itinerary"("id") ON DELETE CASCADE ON UPDATE CASCADE;
