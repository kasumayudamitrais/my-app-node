import DataSource from "../../dataSource.js";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import User from '../../model/user.js';
import UserArgs from "./arguments/userArgs.js";
import UserInput from "./inputs/userInput.js";

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
    async addUser(@Arg("data") userInput: UserInput){

        let userData = DataSource.manager.create(User,{
            name : userInput.name,
            email : userInput.email,
            age : userInput.age
        });

        return await DataSource.manager.save(userData);
    }

    @Mutation(()=>User)
    async updateUser(@Arg("data") userInput: UserInput){

        let userData = DataSource.manager.findOneBy(User,{
            id:userInput.id
        });

        if (userData == null) throw new Error("Data not found.");

        return await DataSource.manager.save(User,{
            id: userInput.id,
            age: userInput.age,
            email: userInput.email,
            name: userInput.name
        });
    }

    @Mutation(()=>User)
    async deleteUser(@Arg("id")id:number){
        let deleted = await DataSource.manager.delete(User, id);
        return deleted.affected;
    }
}

export default UserResolver;