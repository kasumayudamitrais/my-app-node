import { MiddlewareFn } from "type-graphql";

export const ErrorHandler: MiddlewareFn<any> = async({context, info}, next)=>{
    try{
        return await next();
    }catch(err){
        console.log("Error happened");
        console.log(err);
        throw err;
    }
}