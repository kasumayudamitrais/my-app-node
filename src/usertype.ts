import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const usertype = new GraphQLObjectType({
  name: 'user type',
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

export default usertype
