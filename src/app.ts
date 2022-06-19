import "reflect-metadata";
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema'

const app = express()
const PORT = 3000;

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