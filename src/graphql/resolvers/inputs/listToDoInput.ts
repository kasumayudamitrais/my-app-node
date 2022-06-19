import ListToDo from "src/graphql/model/listToDo";
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