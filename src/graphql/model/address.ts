import "reflect-metadata";
import { Field, ObjectType } from 'type-graphql';

@ObjectType({description: "List to do"})
class Address{

    @Field()
    streetNo: string;

    @Field()
    streetName: string;

    @Field()
    buildingType: string;

}

export default Address
