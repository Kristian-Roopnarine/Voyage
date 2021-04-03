import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class FieldError {
	@Field()
	statusCode!: number;

	@Field()
	message!: string;
}
