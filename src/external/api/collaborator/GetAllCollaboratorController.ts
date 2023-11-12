import { CollaboratorUseCase } from "@/core/collaborator/service/CollaboratorUseCase";
import { Express } from "express";

export default class GetAllCollaboratorController{
    constructor(
        servidor: Express,
        private UseCase: CollaboratorUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/collaborator/GetAll',...middleware, async (req, res)=>{
            try{

                const AllCollaborators = await this.UseCase.GetAllCollaborator()

                return res.json({
                    error: false,
                    AllCollaborators
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