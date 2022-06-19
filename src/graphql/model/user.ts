import { Field, ObjectType, ID } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Address from "./address";
import ListToDo from "./listToDo";

@Entity()
@ObjectType({description: "User data"})
class User extends BaseEntity{
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  age!: number;

  @Field()
  @Column()
  email!: string;

  @Field(type=>[Address], {nullable: true})
  @OneToMany(type=>Address, address => address.user)
  address?: Address[];

  @Field(type=>[ListToDo], {nullable: true})
  @OneToMany(type=>ListToDo, listToDo => listToDo.user)
  agendas?: ListToDo[];

}

export default User
