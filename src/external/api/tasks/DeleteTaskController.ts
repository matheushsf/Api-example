import { TaskUseCase } from "@/core/task/service/TaskUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class DeleteTaskController{
    constructor(
        servidor: Express,
        private UseCase: TaskUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/task/delete', ...middleware,async (req, res)=>{
            try{
                const { IdTask } = req.body

                if(!IdTask) throw new Error(Errors.ERROR_DELETE_TASK)

                await this.UseCase.DeleteTask(IdTask)

                return res.json({
                    error: false,
                    message: 'Tarefa deletada com sucesso.',
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