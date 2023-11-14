import { ProjectUseCase } from "@/core/project/service/ProjectUseCase";
import { Express } from "express";

export default class GetAllProjectController{
    constructor(
        servidor: Express,
        private UseCase: ProjectUseCase,
        ...middleware: any[]
    ){
        servidor.get('/api/project/GetAll',...middleware, async (req, res)=>{
            try{

                const AllTasks = await this.UseCase.GetAllProjects()

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