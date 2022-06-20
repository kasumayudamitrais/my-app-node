import User from '../../../model/user';
import { Args, Field, InputType, Query } from "type-graphql";

@InputType({description:"New user"})
class UserInput implements Partial<User>{
    
    @Field({nullable:true})
    id?: number;

    @Field()
    name!: string;

    @Field()
    age!: number;

    @Field()
    email!: string;

}

export default UserInput;