import dotenv from 'dotenv'
import express from 'express'
import RegisterUserController from './external/api/user/RegisterUserController'
import { RegisterUserUseCase } from './core/user/service/RegisterUser'
import UserRepository from './external/repository/user/UserRepository'
import LoginUserController from './external/api/user/LoginUserController'
import { LoginUserUseCase } from './core/user/service/LoginUser'
dotenv.config()

const app = express()

const porta = process.env.API_PORT ?? 4000
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta${porta}`);
})

// Register User -----------------

const repositoryUser = new UserRepository()
const useCaseRegisterUser = new RegisterUserUseCase(repositoryUser)
new RegisterUserController(app, useCaseRegisterUser)

// Login User

const useCaseLoginUser = new LoginUserUseCase(repositoryUser)
new LoginUserController(app, useCaseLoginUser)