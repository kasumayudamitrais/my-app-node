import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import ListToDo from "../../model/listToDo.js";
import ListToDoArgs from "./arguments/listTodoArgs"
import listToDoInput from "./inputs/listToDoInput"

@Resolver(of => ListToDo)
class ListToDoResolver{
    @Query(returns => [ListToDo])
    async listToDos(@Args(){ title, content, isCompleted, startIndex, endIndex }: ListToDoArgs){
        let listToDos = await ListToDo.find();
        if (title){
            listToDos = listToDos.filter(item=> item.title === title);
        }

        if (content){
            listToDos = listToDos.filter(item=> item.content === content);
        }

        if (isCompleted){
            listToDos = listToDos.filter(item=> item.isCompleted === isCompleted);
        }

        return listToDos.slice(startIndex, endIndex);

    }

    @Mutation(()=>ListToDo)
    async addListToDo(@Arg("data") newListToDo: listToDoInput){
        let listToDoData = new ListToDo();
        
        listToDoData.title = newListToDo.title;
        listToDoData.content = newListToDo.content;
        listToDoData.isCompleted = newListToDo.isCompleted;

        const result = ListToDo.create(listToDoData);
        await result.save()

        return result;
    }
}

export default ListToDoResolver