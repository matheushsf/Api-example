import { Task } from '@prisma/client'
import { prisma } from '../Prisma'

export default class UserRepository {
    constructor( ){ }

   
    async FindAllTasks() {
        try {
            return await prisma.task.findMany()
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }

    async CreateTask(task: Task) {
        try {
            return await prisma.task.create({
                data: task
            })
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }

    async DeleteTask(Id: string) {
        try {
            return await prisma.task.delete({
                where: {
                    Id,
                },
            });
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }

    async UpdateTask(task: Task) {
        try {
            const {Id} = task
            return await prisma.task.update({
                where: {
                    Id,
                },
                data:task
            });
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }
}