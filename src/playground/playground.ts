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
