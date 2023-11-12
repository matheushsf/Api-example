import { ProjectUseCase } from "@/core/project/service/ProjectUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class DeleteProjectController{
    constructor(
        servidor: Express,
        private UseCase: ProjectUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/project/delete', ...middleware,async (req, res)=>{
            try{
                const { IdProject } = req.body

                if(!IdProject) throw new Error(Errors.ERROR_DELETE_PROJECT)

                await this.UseCase.DeleteProject(IdProject)

                return res.json({
                    error: false,
                    message: 'Projeto deletada com sucesso.',
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