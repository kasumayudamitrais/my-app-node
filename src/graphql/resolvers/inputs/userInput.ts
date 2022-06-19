import User from "src/graphql/model/user";
import userInputType from "src/userinputtype";
import { Args, Field, InputType, Query } from "type-graphql";

@InputType({description:"New user"})
class UserInput implements Partial<User>{
    
    @Field()
    id!: string;

    @Field()
    name!: string;

    @Field()
    age!: number;

    @Field()
    email!: string;

}

export default UserInput;