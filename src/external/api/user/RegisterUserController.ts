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
                console.log(req.body)

                if(!req.body.userName || !req.body.password) throw new Error(Errors.USERNAME_PASSOWRD)
                
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