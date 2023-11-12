import TaskRepository from "@/external/repository/task/TaskRepository";
import Errors from "@/shared/Errors";
import { Task } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';



export class TaskUseCase {
    constructor(private taskRepository: TaskRepository) { }

    async CreateTask(Name: string, Description: string, ProjectId: string) {
        let taskCreate: Task = {
            Id: uuidv4(),
            Name: Name,
            Description: Description,
            ProjectId: ProjectId,
            CreatedAt: new Date(),
            UpdateAt: new Date(),
            DeletedAt: new Date()
        }

        await this.taskRepository.CreateTask(taskCreate)
    }

    async UpdateTask(Name: string, Description: string, ProjectId: string, IdTask: string) {
        let taskCreate: Task = {
            Id: IdTask,
            Name: Name,
            Description: Description,
            ProjectId: ProjectId,
            CreatedAt: new Date(),
            UpdateAt: new Date(),
            DeletedAt: new Date()
        }

        await this.taskRepository.UpdateTask(taskCreate)
    }

    async DeleteTask(idTask: string) {
        await this.taskRepository.DeleteTask(idTask)
    }

    async GetAllTask() {
        return await this.taskRepository.GetAllTasks()
    }
}


