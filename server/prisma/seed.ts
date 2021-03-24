import { PrismaClient } from '@prisma/client';
//import { cityData } from../../city_datata';
const { cityData } = require('./../../city_data');
const prisma = new PrismaClient();

async function seedCountries() {
	const { countryData } = require('./../../country_data');

	for (let country of countryData) {
		await prisma.country.create({ data: country });
	}
}

async function seedCities() {
	for (let city of cityData) {
		await prisma.city.create({ data: city });
	}
}

seedCities()
	.catch((e: Error) => {
		console.log(e.message);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
