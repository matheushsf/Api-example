import { ProjectUseCase } from "@/core/project/service/ProjectUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class UpdateProjectsController{
    constructor(
        servidor: Express,
        private UseCase: ProjectUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/project/update',...middleware, async (req, res)=>{
            try{
                const { IdTask,Name, Description, ProjectId} = req.body

                if(!Name || !Description || !ProjectId || !IdTask) throw new Error(Errors.ERROR_CREATE_TASK)

                await this.UseCase.UpdateProject(Name, ProjectId )

                return res.json({
                    error: false,
                    message: 'Projeto atualizado com sucesso.',
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