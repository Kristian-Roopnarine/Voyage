import { Arg, ObjectType, Query, Resolver } from 'type-graphql';
import { ResolverResponse } from '../types/ResolverResponse';
//import { Itinerary } from '@prisma/client';
import { Itinerary } from './../entity/Itinerary';
import { prisma } from './../index';

/* model Itinerary {
  id String @id @default(uuid())
  title String
  city City @relation(fields:[city_id], references:[id])
  city_id String
  users ItineraryMembers[]
}
*/
@ObjectType()
class ItineraryResolverResponse extends ResolverResponse(Itinerary) {}

// get
// get one
// create
// update?
// delete

@Resolver()
export class ItineraryResolver {
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
}
