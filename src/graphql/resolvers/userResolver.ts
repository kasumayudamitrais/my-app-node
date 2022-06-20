import DataSource from "../../dataSource";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import User from '../../model/user';
import UserArgs from "./arguments/userArgs";
import UserInput from "./inputs/userInput";

@Resolver(of=>User)
class UserResolver{

    @Query(returns=>[User])
    async Users(@Args(){ name, email, age, startIndex, endIndex }:UserArgs){
        let users = await User.find();
        if (name){
            users = users.filter(x=>x.name == name);
        }

        if (age){
            users = users.filter(x=>x.age == age);
        }

        if (email){
            users = users.filter(x=>x.email == email);
        }
        return users;
    }

    @Mutation(()=>User)
    async addUser(@Arg("data") newUser: UserInput){

        const newUserData = DataSource.manager.create(User,{
            name : newUser.name,
            email : newUser.email,
            age : newUser.age
        });

        return await DataSource.manager.save(newUserData);
    }

}

export default UserResolver;