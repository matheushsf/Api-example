import TimeTrackerRepository from "@/external/repository/timetracker/TimeTrackerRepository";
import Errors from "@/shared/Errors";
import { CheckIntervalConflict } from "@/shared/ValidateTimeTrackers";
import { Task, TimeTracker } from "@prisma/client";
import { error } from "console";
import { v4 as uuidv4 } from 'uuid';

export interface TimeTrackerDTO{
    StartDate: string
    EndDate: string
    TimeZoneId: string
    TaskId: string
    CollaboratorId: string
}

export class TimeTrackerUseCase {
    constructor(private timeTrackerRepository: TimeTrackerRepository) { }

    async CreateTimeTracker(TimeTrackerDTO: TimeTrackerDTO) {

        let allTimeTrackerByTask: TimeTracker[] = await this.timeTrackerRepository.GetAllTimeTrackerByTask(TimeTrackerDTO.TaskId)
        const startDate: number = new Date(TimeTrackerDTO.StartDate).getTime();
        const endDate: number = new Date(TimeTrackerDTO.EndDate).getTime();
        if (startDate > endDate) throw new Error (Errors.ERROR_CREATE_TIME_TRACKER_DATE)
        if(CheckIntervalConflict(TimeTrackerDTO,allTimeTrackerByTask)) throw new Error(Errors.ERROR_CREATE_TIME_TRACKER_CONFLITS_INTERVAL)

        let taskCreate: TimeTracker = {
            Id: uuidv4(),
            StartDate: new Date(TimeTrackerDTO.StartDate) ,
            EndDate: new Date(TimeTrackerDTO.EndDate),
            TimeZoneId: "1",
            TaskId: TimeTrackerDTO.TaskId,
            CollaboratorId: TimeTrackerDTO.CollaboratorId,
            CreatedAt: new Date(),
            UpdateAt: new Date(),
            DeletedAt: new Date()
        }

        await this.timeTrackerRepository.CreateTimeTracker(taskCreate)
    }
}


