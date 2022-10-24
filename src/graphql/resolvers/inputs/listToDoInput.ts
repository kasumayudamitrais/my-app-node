import ListToDo from "src/model/listToDo.js";
import { Args, Field, InputType, Query } from "type-graphql";

@InputType({description: "New list to do"})
class ListToDoInput implements Partial<ListToDo>{

    @Field({nullable: true})
    id!: number;

    @Field()
    title!: string;

    @Field()
    content!: string;

    @Field({nullable: true})
    isCompleted?: boolean;

    @Field()
    userId!:number

}

export default ListToDoInput