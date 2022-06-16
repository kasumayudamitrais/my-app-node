import "reflect-metadata";
import { Field, ObjectType } from 'type-graphql';
import Address from "./address";
import ListToDo from "./list-todo";

@ObjectType({description: "User data"})
class User{
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  email: string;

  @Field()
  address: Address;

  @Field(type=>[ListToDo], {nullable: true})
  listToDo?: ListToDo[];

}

export default User
