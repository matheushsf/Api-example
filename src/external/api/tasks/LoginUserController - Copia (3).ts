import { LoginUserUseCase } from "@/core/user/service/LoginUser";
import Errors from "@/shared/Errors";
import { Express } from "express";

export default class LoginUserController{
    constructor(
        servidor: Express,
        private UseCase: LoginUserUseCase
    ){
        servidor.post('/api/usuario/login', async (req, res)=>{
            try{
                if(!req.body.userName || !req.body.password) throw new Error(Errors.LOGIN_USERNAME_PASSOWRD)

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