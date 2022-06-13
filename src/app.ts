import express from 'express';
//import {routes} from './router/router';
import { Config } from './config.js'
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const app = express();
const PORT = Config.port || 3000;

//CONSTRUCT SCHEMA: APPROACH 1
//Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//     type Address {
//         streetName: String,
//         buildingType: String,
//         streetNo: Int
//     }

//     type Query{
//         hello: String,
//         name: String,
//         raw_address: String,
//         address: Address,
//         age: Int,
//         baseSalary(grade: Int!): Float
//     }
// `);

//app.use(express.json()); //tells express to parse request/response as JSON

//Provide a resolver function for each API endpoint
// var root = {
//     hello:()=>{
//         return 'Hello world';
//     },
//     name:()=>{
//         return 'John'
//     },
//     age:()=>{
//         return Math.floor(Math.random() * 100)
//     },
//     baseSalary:(args: { rank: any; })=>{
//         var rank = args.rank;
        
//         switch(rank){
//             case 1:
//                 return 1000;
//             case 2:
//                 return 2000;
//             default:
//                 return undefined;
//         }
//     },
//     address:()=>{
//         return {
//             streetName:()=>{
//                 return 'main road'
//             },
//             streetNo:()=>{
//                 return '23'
//             },
//             buildingType:()=>{
//                 return 'Apartment'
//             }
//         }
//     }
// }

//CONSTRUCT SCHEMA: APPROACH 2 - BETTER

//Mock User DB
var fakeUserData = {
    'a':{
        id: 'a',
        name: 'John',
        age: 21,
        salary: 1000
    },
    'b':{
        id: 'b',
        name: 'Does',
        age: 31
    }
}

var addressType = new GraphQLObjectType({
    name: 'Address',
    fields:{
        streetNo:{ 
            type: GraphQLInt, 
            description: 'Street number',
            resolve:()=>{
                return 12;
            }
        },
        streetName:{
            type: GraphQLString,
            description: 'Street name'
        },
        buildingType:{
            type: GraphQLString,
            description: 'Building type'
        }
    }
});

var userType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{
            type: GraphQLString,
            description: 'User ID'
        },
        name:{
            type: GraphQLString,
            description: 'User name'
        },
        age:{
            type: GraphQLInt,
            description: 'User age'
        }
    }
});

var queryType = new GraphQLObjectType({
    name: 'Query',
    fields:{
        user:{
            type: userType,
            resolve:()=>{
                return fakeUserData['a'];
            }
        },
        address:{
            type: addressType,
            resolve:()=>{
                return 'The address';
            }
        }
    }
});

var schema = new GraphQLSchema({query: queryType});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    //rootValue: root,
    graphiql: true
}));


//routes(app);

app.listen(PORT, () =>{
    console.log(`Server is running in http://localhost:${PORT}`);
})
