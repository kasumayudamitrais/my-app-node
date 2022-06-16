import "reflect-metadata";
import ListToDo from "src/graphql/model/listToDo";
import { Args, Field, InputType, Query } from "type-graphql";

@InputType()
class ListToDoInput implements Partial<ListToDo>{

    @Field()
    title!: string;

    @Field()
    content!: string;

    @Field({nullable: true})
    isCompleted?: boolean | undefined;

}

export default ListToDoInput