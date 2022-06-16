import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const addresstype = new GraphQLObjectType({
  name: 'addresstype',
  fields: {
    streetNo: {
      type: GraphQLInt,
      description: 'Street number',
      resolve: () => {
        return 12
      },
    },
    streetName: {
      type: GraphQLString,
      description: 'Street name',
    },
    buildingType: {
      type: GraphQLString,
      description: 'Building type',
    },
  },
})

export default addresstype
