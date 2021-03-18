import { Arg, Mutation, Query, Resolver } from "type-graphql";
import faker from "faker";
import { User } from "./../entity/User";
import { prisma } from "./../index";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hello";
  }

  @Mutation(() => User)
  async login(@Arg("token") token: string): Promise<User> {
    // put function here to conver token to googleId, get email,firstname and lastname
    // check if user exists
    let user: User | null = await prisma.user.findUnique({
      where: { googleId: token },
    });

    // might have to change this for unit tests
    if (!user) {
      let fakeFirstName = faker.name.firstName();
      let fakeLastName = faker.name.lastName();
      let fakeEmail = faker.internet.email();
      user = await prisma.user.create({
        data: {
          email: fakeEmail,
          firstName: fakeFirstName,
          lastName: fakeLastName,
          googleId: token,
        },
      });
    }

    return user;
  }
}
