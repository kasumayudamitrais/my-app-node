import express from 'express'
import { Config } from './config.js'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import usertype from './graphql/model/user.js'
import userdata from './fakedata.js'
import lodash from 'lodash'

const app = express()
const PORT = Config.port || 2222

// const queryType = new GraphQLObjectType({
//   name: 'Query',
//   fields: {
//     user: {
//       type: usertype,
//       args: {
//         name: {
//           type: GraphQLString,
//         },
//       },
//       resolve: (_, { name }) => {
//         return lodash.filter(userdata, { name: name })[0]
//       },
//     },
//   },
// })

const schema = new GraphQLSchema({ query: null })

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})