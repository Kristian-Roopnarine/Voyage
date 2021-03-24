import { ObjectType, ID, Int, Field } from 'type-graphql';

@ObjectType()
export class Country {
	@Field((type) => ID)
	id!: String;

	@Field((type) => String)
	name!: String;

	// define field for cities
}
