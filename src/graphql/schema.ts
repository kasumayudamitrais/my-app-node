
import pkg from "type-graphql";
const {buildSchema} = pkg;
import path from 'path';
import { fileURLToPath } from "url";
import addressResolver from './resolvers/addressResolver'
import ListToDoResolver from "./resolvers/listToDoResolver";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schema = await buildSchema({
    resolvers: [addressResolver, ListToDoResolver
        //__dirname + "/resolvers/*.{ts,js}"
    ]
});

export default schema;