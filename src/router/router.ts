import * as core from "express-serve-static-core"
import {createTask, getTasks} from "../controller/todo-controller.js";

export function routes(app: core.Express){
    app.post("/task", createTask),
    app.get("/tasks", getTasks)
}
