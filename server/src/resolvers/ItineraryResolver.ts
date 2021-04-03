import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { ResolverResponse } from '../types/ResolverResponse';
//import { Itinerary } from '@prisma/client';
import { Itinerary } from './../entity/Itinerary';
import { UserRole } from '@prisma/client';
import { prisma } from './../index';

@ObjectType()
class ItineraryResolverResponse extends ResolverResponse(Itinerary) {}

// get all for user
// get one (done)
// create (done)
// update? what will the users have to update??
// delete (done)

@InputType()
class CreateItineraryInput implements Partial<Itinerary> {
	@Field((type) => String)
	title!: string;

	@Field((type) => String)
	city_id!: string;
}

@Resolver()
export class ItineraryResolver {
	// figure out how to add authentication to this
	@Query(() => ItineraryResolverResponse)
	async getItinerary(@Arg('itinId') itinId: string): Promise<ItineraryResolverResponse> {
		const itinerary: Itinerary | null = await prisma.itinerary.findUnique({
			where: {
				id: itinId,
			},
			include: {
				users: true,
			},
		});

		if (!itinerary) {
			return {
				errors: [
					{
						statusCode: 404,
						message: 'Itinerary not found',
					},
				],
			};
		}
		return {
			data: itinerary,
		};
	}

	@Mutation(() => ItineraryResolverResponse)
	async createItinerary(
		@Arg('options') { title, city_id }: CreateItineraryInput
	): Promise<ItineraryResolverResponse> {
		// maybe check if city exists first

		// until I get authentication working, user_id will come from token
		// test user from db
		const user_id = '3e34c37c-f579-4e97-a03a-29da934d5184';
		const itinerary: Itinerary = await prisma.itinerary.create({
			data: {
				title,
				city_id,
				// this creates the relationship in the db
				users: {
					create: [
						{
							user_id,
							role: UserRole.CREATOR,
						},
					],
				},
			},
			include: {
				users: true,
			},
		});
		return {
			data: itinerary,
		};
	}

	@Mutation(() => String)
	async deleteItinerary(@Arg('id') id: string): Promise<string> {
		const deleteMembers = prisma.itineraryMembers.deleteMany({
			where: {
				itinerary_id: id,
			},
		});
		const deleteItinerary = prisma.itinerary.delete({
			where: {
				id,
			},
		});
		const transaction = await prisma.$transaction([deleteMembers, deleteItinerary]);
		return 'success';
	}
}
