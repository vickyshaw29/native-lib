// LearnerGamificationDataI
import { EventsDataT } from "./Events";

export interface GoalEventI {
    type: string;
}

export type ActiveGoalI = {
    currentValue: number,
    targetValue: number,
    repeat: boolean,
    status: "active" | "completed",
    triggers: EventsDataT,
    expiration: Date,
    expiresAt: number,
    expirationDelta: number,
    label: string,
    onComplete: [
        {
            type: "POINTS",
            value: number
        }
    ],
}
export interface ActiveGoalsI {
    [key: string]: ActiveGoalI;
}

export interface LearnerGamificationDataI {
    activeGoals?: ActiveGoalsI;
    levelClassic?: string;
    keys?: string[];
}