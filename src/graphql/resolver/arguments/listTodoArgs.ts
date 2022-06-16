import { Min, Max } from "class-validator";
import "reflect-metadata";
import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
class ListToDoArgs{
    @Field(type => Int, { defaultValue: 0 })
    @Min(0)
    skip!: number;

    @Field(type=>Int)
    @Min(1)
    @Max(50)
    take = 25;

    @Field({nullable: true})
    title?:string;

    @Field({nullable: true})
    content?:string;

    @Field({nullable: true})
    isCompleted?:boolean;

    get startIndex():number{
        return this.skip;
    }

    get endIndex():number{
        return this.skip + this.take;
    }

}

export default ListToDoArgs;