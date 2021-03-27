import { ObjectType, Field, ClassType } from 'type-graphql';
import { FieldError } from './FieldError';
/*
@ObjectType()
export class ResolverResponse<T> {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];

	@Field({ nullable: true })
	data?: T;
}
*/

export function ResolverResponse<T>(TClass: ClassType<T>) {
	@ObjectType({ isAbstract: true })
	abstract class ResolverResponseClass {
		@Field(() => [FieldError], { nullable: true })
		errors?: FieldError[];

		@Field((type) => TClass, { nullable: true })
		data?: T;
	}
	return ResolverResponseClass;
}
export function ResolverArrayResponse<T>(TClass: ClassType<T>) {
	@ObjectType({ isAbstract: true })
	abstract class ResolverResponseClass {
		@Field(() => [FieldError], { nullable: true })
		errors?: FieldError[];

		@Field((type) => [TClass], { nullable: true })
		data?: T[];
	}
	return ResolverResponseClass;
}
