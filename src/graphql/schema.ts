
import pkg from "type-graphql";
const {buildSchema} = pkg;
import path from 'path';
import { fileURLToPath } from "url";
import userResolver from './resolvers/userResolver.js';
import { ErrorHandler } from "../middleware/errorHandler.js";
import ListToDoResolver from "./resolvers/listToDoResolver.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schema = await buildSchema({
    resolvers: [userResolver
        , ListToDoResolver
        //__dirname + "/resolvers/*.{ts,js}"
    ],
    globalMiddlewares:[ErrorHandler]
});

export default schema;