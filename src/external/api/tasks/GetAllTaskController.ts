import { TaskUseCase } from "@/core/task/service/TaskUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class GetAllTaskController{
    constructor(
        servidor: Express,
        private UseCase: TaskUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/task/findAll',...middleware, async (req, res)=>{
            try{
                const AllTasks = await this.UseCase.GetAllTask()

                return res.json({
                    error: false,
                    AllTasks
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