import { ActiveGoalsI } from "./LearnerGamification"
import { ConditionDataT } from "./Conditions"
import { QuerySettingsDataT } from "./Queries"

export type ActionUnlockDataT = {
    condition?: ConditionDataT[],
    query: QuerySettingsDataT,
    type: "unlock"
}

export type ActionUnlockKeyDataT = {
    condition?: ConditionDataT[],
    keyId: string,
    type: "unlock_key"
}

export type ActionGoalDataT = {
    "condition": ConditionDataT[],
    "goals": ActiveGoalsI,
    "type": "goal"
}

export type ActionSubscribeDataT = {
    "condition": ConditionDataT[],
    "topics": string[],
    "type": "subscribe"
}

export type ActionBadgeDataT = {
    "condition": ConditionDataT[],
    "badgeId": string,
    "type": "badge"
}

export type ActionData = ActionUnlockDataT | ActionGoalDataT | ActionSubscribeDataT | ActionUnlockKeyDataT

export type EventDataT = {
    type: string,
    actions: ActionData[],
    schedule: any
}

export type EventsDataT = EventDataT[]



// export type EventCompleteDataT = {
//     "type": "COMPLETED"
// }

// export type EventDataT = EventCompleteDataT
