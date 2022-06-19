import { Min, Max } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
class UserArgs{
    @Field(type => Int, { defaultValue: 0 })
    @Min(0)
    skip!: number;

    @Field(type=>Int)
    @Min(1)
    @Max(50)
    take = 25;

    @Field()
    name?: string;

    @Field()
    age?: number;
    
    @Field()
    email?: string;

    get startIndex():number{
        return this.skip;
    }

    get endIndex():number{
        return this.skip + this.take;
    }
}

export default UserArgs;