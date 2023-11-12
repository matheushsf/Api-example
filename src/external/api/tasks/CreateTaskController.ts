import { LoginUserUseCase } from "@/core/user/service/LoginUser";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class CreateTaskController{
    constructor(
        servidor: Express,
        private UseCase: LoginUserUseCase
    ){
        servidor.post('/api/task/create', async (req, res)=>{
            try{
                const { Name, Description, ProjectId} = req.body

                if(!Name || !Description || !ProjectId) throw new Error(Errors.ERROR_CREATE_TASK)

                const token = await this.UseCase.LoginUser(req.body.userName, req.body.password)

                return res.json({
                    error: false,
                    message: 'Login efetuado com sucesso.',
                    token
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