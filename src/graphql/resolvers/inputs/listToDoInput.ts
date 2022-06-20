import ListToDo from "src/model/listToDo.js";
import { Args, Field, InputType, Query } from "type-graphql";

@InputType({description: "New list to do"})
class ListToDoInput implements Partial<ListToDo>{

    @Field()
    id!: string;

    @Field()
    title!: string;

    @Field()
    content!: string;

    @Field({nullable: true})
    isCompleted?: boolean;

}

export default ListToDoInput