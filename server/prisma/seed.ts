import { countryData } from "./../../country_data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let country of countryData) {
    await prisma.country.create({ data: country });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
