import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  id: String;

  @Field((type) => String)
  firstName: String;

  @Field((type) => String)
  lastName: String;

  @Field((type) => String)
  googleId: String;

  @Field((type) => String)
  email: String;
}
