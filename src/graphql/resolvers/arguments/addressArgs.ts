//import "reflect-metadata";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
class AddressArgs{
    @Field({nullable: true })
    streetNo?: string;

    @Field({nullable: true })
    streetName?: string;

    @Field({nullable: true })
    buildingType?: string;
}

export default AddressArgs;