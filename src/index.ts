import dotenv from 'dotenv'
import express from 'express'
import RegisterUserController from './external/api/user/RegisterUserController'
import { RegisterUserUseCase } from './core/user/service/RegisterUser'
import UserRepository from './external/repository/user/UserRepository'
import LoginUserController from './external/api/user/LoginUserController'
import { LoginUserUseCase } from './core/user/service/LoginUser'
import { CollaboratorUseCase } from './core/collaborator/service/CollaboratorUseCase'
import GetAllCollaboratorController from './external/api/collaborator/GetAllCollaboratorController'
import CollaboratorRepository from './external/repository/colaborator/ColaboratorRepository'
import JWTMiddleware from './external/Middleware.ts/JWTMiddleware'
import ProjectRepository from './external/repository/project/ProjectRepository'
import { ProjectUseCase } from './core/project/service/ProjectUseCase'
import CreateProjectController from './external/api/projects/CreateProjectController'
import DeleteProjectController from './external/api/projects/DeleteProjectController'
import GetAllProjectController from './external/api/projects/GetAllProjectController'
import UpdateProjectsController from './external/api/projects/UpdateProjectController'
import TaskRepository from './external/repository/task/TaskRepository'
import { TaskUseCase } from './core/task/service/TaskUseCase'
import CreateTaskController from './external/api/tasks/CreateTaskController'
import DeleteTaskController from './external/api/tasks/DeleteTaskController'
import GetAllTaskController from './external/api/tasks/GetAllTaskController'
import TimeTrackerRepository from './external/repository/timetracker/TimeTrackerRepository'
import { TimeTrackerUseCase } from './core/timeTracker/service/TimeTrackerUseCase'
import CreateTimeTrackerController from './external/api/timeTracker/CreateTimeTrackerController'
import UpdateTaskController from './external/api/tasks/UpdateTaskController'
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

// Collaborator
const repositoryCollaborator = new CollaboratorRepository()
const useCaseCollaborator = new CollaboratorUseCase(repositoryCollaborator)
new GetAllCollaboratorController(app, useCaseCollaborator, JWTMiddleware())


// Project
const repositoryProject = new ProjectRepository()
const useCaseProjects = new ProjectUseCase(repositoryProject)
new CreateProjectController(app, useCaseProjects, JWTMiddleware())
new DeleteProjectController(app, useCaseProjects, JWTMiddleware())
new GetAllProjectController(app, useCaseProjects, JWTMiddleware())
new UpdateProjectsController(app, useCaseProjects, JWTMiddleware())

// Task
const repositoryTask = new TaskRepository()
const useCaseTask = new TaskUseCase(repositoryTask)
new CreateTaskController(app, useCaseTask, JWTMiddleware())
new DeleteTaskController(app, useCaseTask, JWTMiddleware())
new GetAllTaskController(app, useCaseTask, JWTMiddleware())
new UpdateTaskController(app, useCaseTask, JWTMiddleware())

// TimeTracker
const repositoryTimeTracker = new TimeTrackerRepository()
const useCaseTimeTracker = new TimeTrackerUseCase(repositoryTimeTracker)
new CreateTimeTrackerController(app, useCaseTimeTracker, JWTMiddleware())
