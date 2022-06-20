
import pkg from "type-graphql";
const {buildSchema} = pkg;
import path from 'path';
import { fileURLToPath } from "url";
import userResolver from './resolvers/userResolver';
import { createConnection } from "net";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schema = await buildSchema({
    resolvers: [userResolver
        //__dirname + "/resolvers/*.{ts,js}"
    ]
});

export default schema;