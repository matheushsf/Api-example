import ProjectRepository from "@/external/repository/project/ProjectRepository";

import { Project, Task } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';



export class ProjectUseCase {
    constructor(private projectRepository: ProjectRepository) { }

    async CreateProject(Name: string) {
        let projectCreate: Project = {
            Id: uuidv4(),
            Name: Name,
            CreatedAt: new Date(),
            UpdateAt: new Date(),
            DeletedAt: new Date()
        }

        await this.projectRepository.CreateProject(projectCreate)
    }

    async UpdateProject(Name: string, IdProject: string) {
        let taskCreate: Project = {
            Id: IdProject,
            Name: Name,
            CreatedAt: new Date(),
            UpdateAt: new Date(),
            DeletedAt: new Date()
        }

        await this.projectRepository.UpdateProject(taskCreate)
    }

    async DeleteProject(idTask: string) {
        await this.projectRepository.DeleteProject(idTask)
    }

    async GetAllProjects() {
        return await this.projectRepository.GetAllProjects()
    }
}


