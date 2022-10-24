import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import User from './user.js';

@Entity()
@ObjectType({description: "List to do data"})
class ListToDo extends BaseEntity{
    @Field(()=> ID )
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    content!: string;

    @Field({nullable: true})
    @Column()
    isCompleted?: boolean;

    //@Field()
    @ManyToOne(type=>User, user => user.agendas)
    //@JoinColumn()
    user: User | undefined | null;

    @CreateDateColumn({type: 'timestamp', default:()=>'CURRENT_TIMESTAMP', readonly: true})
    createdAt!: Date;

    @UpdateDateColumn({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    updatedAt!: Date;
}

export default ListToDo;