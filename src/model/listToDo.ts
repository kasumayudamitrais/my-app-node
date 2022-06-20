import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user';

@Entity()
@ObjectType({description: "List to do data"})
class ListToDo extends BaseEntity{

    @Field(()=> ID )
    @PrimaryGeneratedColumn()
    id!: string;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    content!: string;

    @Field({nullable: true})
    @Column()
    isCompleted?: boolean;

    @ManyToOne(type=>User, user => user.agendas)
    user: User | undefined;

}

export default ListToDo;