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

export type ResultI = {
    [key: string]: string
};
export type QuizResultI = {
    lastResult?: {
        createdAt?: any;
        results?: ResultI
    },
    results?: {
        [timeStamp: string]: ResultI
    };
};

export interface QuizResultsI {
    [key: string]: QuizResultI
}

export type AnswerDataT = {
    "answerId"?: string,
    "label"?: string,
    "order"?: number,
    "points"?: number,
}

export type QuestionDataT = {
    "answers"?: {
        [key: string]: AnswerDataT
    },
    "feedbacks"?: {
        // [key: string | "default"]: string,
        [key: string]: string,
    },
    "label"?: string,
    "questionId"?: string,
    "showFeedback"?: boolean,
    "tags"?: (string)[],
    "topics"?: (string)[],
    "retry"?: boolean,
    "order": number,
    "return": string | true
}

export type QuizDataT = {
    "quizId"?: string,
    "tags"?: (string)[],
    "topics"?: (string)[],
    "questions"?: {
        [key: string]: any
    }
}

export type Feedback = {
    conditions: ConditionDataT[],
    label: string,
    description: string,
    value: string,
    isPositive: boolean
}
export type Style={
    [key:string]:any|undefined
}

// 

export type ComponentHTMLDataT = {
    "groupLabel"?: string,
    "settings"?: {
        "hideHeader"?: boolean
    },
    "componentId": string,
    "type"?: "html",
    "source"? : string
}
