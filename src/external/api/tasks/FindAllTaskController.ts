import { TaskUseCase } from "@/core/task/service/TaskService";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class FindAllTaskController{
    constructor(
        servidor: Express,
        private UseCase: TaskUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/task/findAll',...middleware, async (req, res)=>{
            try{
                const { IdTask } = req.body

                if(!IdTask) throw new Error(Errors.ERROR_DELETE_TASK)

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