import {TaskUseCase } from "@/core/task/service/TaskUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class CreateTaskController{
    constructor(
        servidor: Express,
        private UseCase: TaskUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/task/create', ...middleware,async (req, res)=>{
            try{
                const { Name, Description, ProjectId} = req.body

                if(!Name || !Description || !ProjectId) throw new Error(Errors.ERROR_CREATE_TASK)

                const task = await this.UseCase.CreateTask(Name, Description, ProjectId)

                return res.json({
                    error: false,
                    message: 'Tarefa criada com sucesso.',
                    task
                }).status(201)

            }catch(erro: any){
                return res.json({
                    error: true,
                    message: erro.message,
                }).status(400)
            }    
        })
    }
}