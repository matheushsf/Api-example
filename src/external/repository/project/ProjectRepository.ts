import { prisma } from '../Prisma'
import { Project } from '@prisma/client';

export default class ProjectRepository {
    constructor() { }

    async FindAllProjects() {
        try {
            return await prisma.project.findMany()
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }

    async CreateProject(project: Project) {
        try {
            return await prisma.project.create({
                data: project
            })
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }

    async DeleteProject(Id: string) {
        try {
            return await prisma.project.delete({
                where: {
                    Id,
                },
            });
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }

    async UpdateProject(project: Project) {
        try {
            const {Id} = project
            return await prisma.project.update({
                where: {
                    Id,
                },
                data:project
            });
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }
}