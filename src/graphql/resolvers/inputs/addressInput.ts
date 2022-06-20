//import "reflect-metadata";
import Address from "src/model/address.js";
import { Field, InputType } from "type-graphql";

@InputType({description:"New address"})
class AddressInput implements Partial<Address>{

    @Field()
    streetNo!: string;

    @Field()
    streetName!: string;

    @Field({nullable: true })
    buildingType?: string;

}

export default AddressInput;