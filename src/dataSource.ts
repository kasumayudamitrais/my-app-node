import { DataSource } from "typeorm";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//console.log(__dirname + "/model/*.ts");
//console.log(__dirname + "/../dist/model/*.js");

const dataSource = new DataSource({
    type: "postgres",  
    host: "localhost",
    port: 5432,
    username: "kasumayuda",
    synchronize: true,
    database: "ListToDoDB",
    logging:true,
    entities: [
        //User
        //__dirname + "/../dist/model/*.js",
        __dirname + "/model/*.ts"
    ]
});

// if (dataSource.isInitialized == false){
//     dataSource.initialize().then(()=>{
//         console.log("Data Source has been initialized!")
//     }).catch((err)=>{
//         console.error("Error during Data Source initialization", err)
//     });
// }

export default dataSource;