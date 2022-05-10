export type ConditionEqualDataT = {
    type: "=",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionNotEqualDataT = {
    type: "!=",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionMoreDataT = {
    type: ">",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionMoreEqualDataT = {
    type: ">=",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionLessDataT = {
    type: "<",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionLessEqualDataT = {
    type: "<=",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionInDataT = {
    type: "in",
    value1: string | number | boolean,
    value2: string | number | boolean
}
export type ConditionNotInDataT = {
    type: "notin",
    value1: string | number | boolean,
    value2: string | number | boolean
}

export type ConditionDataT = ConditionEqualDataT | ConditionNotEqualDataT | ConditionMoreDataT | ConditionMoreEqualDataT | ConditionLessDataT | ConditionLessEqualDataT | ConditionInDataT | ConditionNotInDataT
