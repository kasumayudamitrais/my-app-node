//import "reflect-metadata";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
class AddressArgs{
    @Field()
    streetNo!: string;

    @Field()
    streetName!: string;

    @Field({nullable: true })
    buildingType?: string;
}

export default AddressArgs;