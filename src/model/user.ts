import { Field, ObjectType, ID } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Address from "./address.js";
import ListToDo from "./listToDo.js";

@Entity()
@ObjectType({description: "User data"})
class User extends BaseEntity{
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({nullable:true})
  @Column()
  name?: string;

  @Field({nullable:true})
  @Column()
  age?: number;

  @Field({nullable:true})
  @Column()
  email?: string;

  @Field(type=>[Address], {nullable: true})
  @OneToMany(type=>Address, address => address.user)
  address?: Address[];

  @Field(type=>[ListToDo], {nullable: true})
  //@OneToMany(type=>ListToDo, listToDo => listToDo.user)
  @OneToMany(()=>ListToDo, (listToDo)=>listToDo.user)
  //@JoinColumn({name:'agenda',referencedColumnName:'id'})
  agendas?: ListToDo[];

}

export default User
