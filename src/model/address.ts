import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user';

@Entity()
@ObjectType({description: "User address"})
class Address extends BaseEntity{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id!: string;

    @Field()
    @Column()
    streetNo!: string;

    @Field()
    @Column()
    streetName!: string;

    @Field({nullable: true })
    @Column()
    buildingType?: string;

    @ManyToOne(type=>User, user=>user.address)
    user: User | undefined;

}

export default Address