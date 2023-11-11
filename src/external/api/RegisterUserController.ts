import { RegisterUserUseCase } from "@/core/user/service/RegisterUser";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class RegisterUserController{

    constructor(
        servidor: Express,
        private UseCase: RegisterUserUseCase
    ){
        servidor.post('/api/usuario/register', async (req, res)=>{
            try{
                console.log(req.body.userName)
                if(!req.body.userName || !req.body.password){
                    return res.json({
                        error: true,
                        message: Errors.USERNAME_PASSOWRD,
                    }).status(400)
                }

                const user = await this.UseCase.registerUser(req.body.userName, req.body.password)

                return res.json({
                    error: false,
                    message: 'Usuario criado com sucesso!',
                    user
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