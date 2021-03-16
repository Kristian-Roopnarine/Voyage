import { Query, Resolver } from 'type-graphql';
import { User } from './../entity/User';

@Resolver()
export class UserResolver {
	@Query(() => String)
	hello() {
		return 'hello';
	}
}
