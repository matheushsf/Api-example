import { ProjectUseCase } from "@/core/project/service/ProjectUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class CreateProjectController{
    constructor(
        servidor: Express,
        private UseCase: ProjectUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/project/create', ...middleware,async (req, res)=>{
            try{
                const { Name } =  req.body 
                if(!Name) throw new Error(Errors.ERROR_CREATE_TASK)

                const project = await this.UseCase.CreateProject(Name)

                return res.json({
                    error: false,
                    message: 'Projeto criado com sucesso.',
                    project
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