import { GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql'

const userInputType = new GraphQLInputObjectType({
  name: 'User input type',
  fields: {
    id: {
      type: GraphQLString,
      description: 'User ID',
    },
    name: {
      type: GraphQLString,
      description: 'User name',
    },
    age: {
      type: GraphQLInt,
      description: 'User age',
    },
    email: {
      type: GraphQLString,
      description: 'User email',
    },
  },
})

export default userInputType
