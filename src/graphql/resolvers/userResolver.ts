import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import ListToDo from "../model/listToDo";
import User from "../model/user";
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
        let newUserData = new User();
        newUserData.name = newUser.name
        newUserData.email = newUser.email;
        newUserData.age = newUser.age;
        
        const result = User.create(newUserData);
        await result.save();

        return newUserData;
    }

}