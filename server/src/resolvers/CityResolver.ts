import { Arg, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { City } from './../entity/City';
import { prisma } from './../index';

@ObjectType()
class FieldError {
	@Field()
	statusCode!: number;

	@Field()
	message!: string;
}
@ObjectType()
class CityResolverResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];
	@Field(() => [City], { nullable: true })
	data?: City[];
}
@Resolver()
export class CityResolver {
	@Query(() => CityResolverResponse)
	async getSimilarCities(@Arg('name') name: string): Promise<CityResolverResponse> {
		const cities: City[] | null = await prisma.city.findMany({
			where: {
				name: {
					startsWith: name,
				},
			},
			include: {
				country: true,
			},
		});
		if (!cities) {
			return {
				errors: [
					{
						statusCode: 404,
						message: 'City not found',
					},
				],
			};
		}
		return {
			data: cities,
		};
	}
}
