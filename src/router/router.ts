<<<<<<< HEAD
import * as core from "express-serve-static-core"
import {createTask, getTasks} from "../controller/todo-controller";

export function routes(app: core.Express){
    app.post("/task", createTask),
    app.get("/tasks", getTasks)
}
=======
import * as core from 'express-serve-static-core'
import { createTask, getTasks } from '../controller/todo-controller.js'

export function routes(app: core.Express) {
  app.post('/task', createTask), app.get('/tasks', getTasks)
}
>>>>>>> 3ac922eeb4f02f2ebf814f43c01d0956dae7c1a3
