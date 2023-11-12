import { TimeTrackerDTO, TimeTrackerUseCase } from "@/core/timeTracker/service/TimeTrackerUseCase";
import Errors from "@/shared/Errors";
import { Express } from "express";


export default class CreateTaskController{
    constructor(
        servidor: Express,
        private UseCase: TimeTrackerUseCase,
        ...middleware: any[]
    ){
        servidor.post('/api/timeTracker/create', ...middleware,async (req, res)=>{
            try{
                const { StartDate, EndDate, TimeZoneId, TaskId, CollaboratorId} = req.body

                if(!StartDate || !EndDate || !TimeZoneId || !TaskId || !CollaboratorId) throw new Error(Errors.ERROR_CREATE_TASK)

                const timetracker = await this.UseCase.CreateTimeTracker({StartDate, EndDate, TimeZoneId, TaskId, CollaboratorId})

                return res.json({
                    error: false,
                    message: 'Timetracker criado com sucesso.',
                    timetracker
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