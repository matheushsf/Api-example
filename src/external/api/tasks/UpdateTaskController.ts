import { TaskUseCase } from "@/core/task/service/TaskService";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class UpdateTaskController{
    constructor(
        servidor: Express,
        private UseCase: TaskUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/task/update',...middleware, async (req, res)=>{
            try{
                const { IdTask,Name, Description, ProjectId} = req.body

                if(!Name || !Description || !ProjectId || !IdTask) throw new Error(Errors.ERROR_CREATE_TASK)

                const task = await this.UseCase.UpdateTask(Name, Description, ProjectId, IdTask)

                return res.json({
                    error: false,
                    message: 'Tarefa atualizada com sucesso.',
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