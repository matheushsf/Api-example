import { TimeTrackerDTO } from '@/core/timeTracker/service/TimeTrackerUseCase';
import { TimeTracker } from '@prisma/client';
import jwt from 'jsonwebtoken';

// export interface TimeTrackerDTO{
//   StartDate: string
//   EndDate: string
//   TimeZoneId: string
//   TaskId: string
//   CollaboratorId: string
// }

export function CheckIntervalConflict(newInterval: TimeTrackerDTO, allTimeTrackerByTask: TimeTracker[]) {
  const newIntervalStart = new Date(newInterval.StartDate);
  const newIntervalEnd = new Date(newInterval.EndDate);

  for (const interval of allTimeTrackerByTask) {
    const intervalStart = new Date(interval.StartDate);
    const intervalEnd = new Date(interval.EndDate);

    if (
      (newIntervalStart >= intervalStart && newIntervalStart <= intervalEnd) ||
      (newIntervalEnd >= intervalStart && newIntervalEnd <= intervalEnd) ||
      (newIntervalStart <= intervalStart && newIntervalEnd >= intervalEnd)
    ) {
      return true; // Conflito de intervalo
    }
  }
  return false; // Sem conflito de intervalo
}