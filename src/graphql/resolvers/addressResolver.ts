import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "vm";
import Address from "../../model/address.js";
import AddressArgs from "./arguments/addressArgs.js";
import AddressInput from "./inputs/addressInput.js";

@Resolver(of => Address)
class AddressResolver{
    private addressData: Address | undefined;

    @Query(returns => Address)
    async Address(@Args(){streetName, streetNo, buildingType}:AddressArgs){
        return this.addressData;
    }

    @Mutation()
    addAddress(@Arg("data") newAddress : AddressInput, @Ctx() ctx: Context):Address{
        let newAddressData = new Address();

        newAddressData.buildingType = newAddress.buildingType;
        newAddressData.streetName = newAddress.streetName;
        newAddressData.streetNo = newAddress.streetNo;

        this.addressData = newAddressData;

        return newAddressData;
    }
}

export default AddressResolver;