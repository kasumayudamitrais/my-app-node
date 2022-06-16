import "reflect-metadata";
import { Field, ObjectType } from 'type-graphql';

@ObjectType({description: "List to do data"})
class ListToDo{

    @Field()
    title!: string;

    @Field()
    content!: string;

    @Field({nullable: true})
    isCompleted?: boolean;

}

export default ListToDo;