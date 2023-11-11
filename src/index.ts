import dotenv from 'dotenv'
import express from 'express'
import RegisterUserController from './external/api/RegisterUserController'
import { RegisterUserUseCase } from './core/user/service/RegisterUser'
import UserRepository from './external/repository/user/UserRepository'
dotenv.config()

const app = express()

const porta = process.env.API_PORT ?? 4000
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta${porta}`);
})

// Register User -----------------

const repository = new UserRepository()
const useCase = new RegisterUserUseCase(repository)
new RegisterUserController(app, useCase)