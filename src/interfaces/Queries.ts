export type QuerySettingEqualDataT = {
    "key": string,
    "type": "=",
    "value": string | number | boolean
}
export type QuerySettingContainsDataT = {
    "key": string,
    "type": "contains",
    "value": string | number | any
}
export type QuerySettingOrderByDataT = {
    "direction": "asc" | "desc",
    "key": string,
    "type": "orderBy"
}
export type QuerySettingLimitDataT = {
    "type": "limit",
    "value": number
}
export type QuerySettingInDataT = {
    "key": string,
    "type": "in",
    "value": string
}

export type QuerySettingNotInDataT = {
    "key": string,
    "type": "notin",
    "value": string
}
export type QuerySettingIntersectDataT = {
    "source": string,
    "type": "intersect",
    "array": string
}
export type QuerySettingDataT = QuerySettingIntersectDataT | QuerySettingNotInDataT | QuerySettingInDataT | QuerySettingEqualDataT | QuerySettingContainsDataT | QuerySettingOrderByDataT | QuerySettingLimitDataT;
export type QuerySettingsDataT = QuerySettingDataT[]
