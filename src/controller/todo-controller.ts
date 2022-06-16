<<<<<<< HEAD
import { rejects } from 'assert';
import {Response, Request} from 'express';

export function createTask(req: Request, res: Response){
    new Promise((resolve, reject)=>{
        var task = {
            id: req.body.id,
            date: req.body.date,
            description: req.body.description,
            is_finished: req.body.is_finished?1:0
        }
        var err = false;
        if (err){
            reject({
                status: "FAILED",
                message: "Error occured"
            });
        }else{
            resolve({
                status: "SUCCESS"
            });
        }

    }).then(successPayload=>{
        res.send(successPayload);
    }).catch((reason)=>{
        res.send(reason);
    });
}

export function getTasks(req: Request, res: Response){
    new Promise((resolve, reject)=>{
        var err = false;
        if (err){
            reject({
                status: "FAILED",
                message: "does not work!!" 
            });
        }else{
            resolve({
                status: "SUCCESS"
            })
        }
    }).then(successPayload=>{
        res.send(successPayload);
    }).catch((reason)=>{
        res.send(reason);
    });
}
=======
import { Response, Request } from 'express'

export function createTask(req: Request, res: Response) {
  new Promise((resolve, reject) => {
    // const task = {
    //     id: req.body.id,
    //     date: req.body.date,
    //     description: req.body.description,
    //     is_finished: req.body.is_finished?1:0
    // }
    const err = false
    if (err) {
      reject({
        status: 'FAILED',
        message: 'Error occured',
      })
    } else {
      resolve({
        status: 'SUCCESS',
      })
    }
  })
    .then(successPayload => {
      res.send(successPayload)
    })
    .catch(reason => {
      res.send(reason)
    })
}

export function getTasks(req: Request, res: Response) {
  new Promise((resolve, reject) => {
    const err = false
    if (err) {
      reject({
        status: 'FAILED',
        message: 'does not work!!',
      })
    } else {
      resolve({
        status: 'SUCCESS',
      })
    }
  })
    .then(successPayload => {
      res.send(successPayload)
    })
    .catch(reason => {
      res.send(reason)
    })
}
>>>>>>> 3ac922eeb4f02f2ebf814f43c01d0956dae7c1a3
