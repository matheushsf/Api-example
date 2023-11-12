import { prisma } from '../Prisma'
import { TimeTracker } from '@prisma/client';

export default class TimeTrackerRepository {
    constructor( ){ }

    async CreateTimeTracker(timeTracker: TimeTracker) {
        try {
            return await prisma.timeTracker.create({
                data: timeTracker
            })
        } catch (error) {
            throw new Error("Erro ao realizar operacão")
        }
    }
}