import "reflect-metadata";
import { Arg, Args, Ctx, Mutation, Query } from "type-graphql";
import { Context } from "vm";
import ListToDo from "../model/listToDo";
import ListToDoArgs from "./arguments/listTodoArgs"
import ListToDoInput from "./inputs/listToDoInput";
import listToDoInput from "./inputs/listToDoInput"

class ListToDoResolver{
    //private listToDoCollection: ListToDo[] = [];
    private listToDoCollection: ListToDo[] = [{
        title : "Laundry",
        content : "Take the laundry at 10am",
        isCompleted : false
    },{
        title : "PSM1",
        content: "Take PSM1 quizz",
        isCompleted: false
    },{
        title : "Clean the house",
        content: "Clean the bathroom and backyard",
        isCompleted: true
    },{
        title : "Groceries Shop",
        content: "Buy fruit, veggie, meat and chicken",
        isCompleted: false
    },{
        title : "Learn Graphql",
        content: "Learn mutation & query",
        isCompleted: false
    }
    ];

    @Query(returns => [ListToDo])
    async listToDos(@Args(){ title, content, isCompleted, startIndex, endIndex }: ListToDoArgs){
        let listToDos = this.listToDoCollection;

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

    @Mutation()
    addListToDo(@Arg("data") newListToDo: listToDoInput, @Ctx() ctx: Context ):ListToDo{
        let listToDoData = new ListToDo();
        
        listToDoData.title = newListToDo.title;
        listToDoData.content = newListToDo.content;
        listToDoData.isCompleted = newListToDo.isCompleted;

        this.listToDoCollection.push(listToDoData);
        return listToDoData;
    }
}

export default ListToDoResolver