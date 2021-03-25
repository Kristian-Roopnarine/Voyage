import { ObjectType, ID, Int, Field } from 'type-graphql';
import { City } from './City';

@ObjectType()
export class Itinerary {
	@Field((type) => ID)
	id!: String;

	@Field()
	title!: String;

	@Field()
	city!: City;

	@Field()
	city_id!: String;
}
