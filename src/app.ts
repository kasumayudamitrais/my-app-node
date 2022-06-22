import "reflect-metadata";
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema'
import dataSource from "./dataSource";

const app = express()
const PORT = 3000;

dataSource.initialize()
    .then(()=>{
        console.log("Data source has been initialised.")
    })
    .catch((err)=>{
        console.log("Error during initialisation", err)
    });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  }),
)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})