import { ObjectType, ID, Int, Field } from 'type-graphql';
import { City } from './City';
import { User } from './User';
import { UserRole } from '@prisma/client';

// need to make ItineraryMembers type

@ObjectType()
class ItineraryMembers {
	@Field()
	user?: User;

	@Field((type) => ID)
	user_id!: String;

	@Field()
	role!: UserRole;
}

@ObjectType()
export class Itinerary {
	@Field((type) => ID)
	id!: String;

	@Field((type) => String)
	title!: String;

	@Field(() => City)
	city?: City;

	@Field((type) => String)
	city_id?: String;

	@Field(() => [ItineraryMembers])
	users!: ItineraryMembers[];
}
