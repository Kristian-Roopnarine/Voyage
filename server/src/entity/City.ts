import { ObjectType, ID, Int, Field } from 'type-graphql';
import { Country } from './Country';

@ObjectType()
export class City {
	@Field((type) => ID)
	id!: String;

	@Field()
	name!: String;

	@Field(() => String, { nullable: true })
	state_name?: String | null;

	@Field(() => String, { nullable: true })
	state_id?: String | null;

	@Field()
	lat!: number;

	@Field()
	lng!: number;

	@Field((type) => Int)
	city_id!: number;

	@Field((type) => Country)
	country!: Country;

	@Field((type) => ID)
	country_id!: String;
}
