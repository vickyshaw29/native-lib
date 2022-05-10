import { CommentDataT } from "../interfaces/Comment"
import { ActionData } from "../interfaces/Events"
import { Feedback } from "./QuizInterface"

export interface LearningCard {
    "cardId": string,
    "order": number,
    "type": string,
}


export type LearningCardBackHomeDataT = {
    "html": string,
    "type": "backHome",
    
}

export type LearningCardReportDataT = {
    "html": string,
    "type": "report"
}

export type LearningCardHTMLDataT = {
    "html": string,
    "cardId": string,
    "order": number,
    "type": "Testo"
}

export type LearningCardVideoDataT = {
    "html"?: string,
    "media"?: any,
    // "type": "Testo"
    "type":"Video"
}
export type LearningCardHTMLImageDataT = {
    "html": string,
    "type": "Testo + immagine",
    // "media": number,
    "media":string
}
export type LearningCardQuizDataT = {
    "type"?: "Quiz",
    "quizId"?: string,
    "skippable"?: boolean,
    "retry"?: boolean,
    "showFeedback"? : boolean,
    "showQuestionFeedback"?: boolean,
    "feedbackMode"? : "classic" | "new",
    "showIntro"? : boolean,
    "intro"? : string,
    "feedbackOptions"?: Feedback[],
    // "onComplete"?: ActionData[],
    "onComplete"?: any[],
    "score"?: {
        [key:string]: number
    } | "default",
    "givePointsOnlyAtFirstTry"?: boolean,
    "givePointsOnlyWithPositiveScore"?: boolean,
    "canRetryQuestion"?: boolean,
    "order":string,
    "cardId":string
}

export type LearningDeckQuerableDataT = {
    "contentId"?: string,
    "createdAt"?: number,
    "type"?: "learningContent"
    "template"?: "learningCards",
    "previewTemplate"?: "standard",
    "status"?: "published" | "draft",
    "order"?: number,
    "author"?: string,
    "coverImage"?: number,
    "duration"?: number,
    "level"?: (number | string)[],
    "start"?: (number | string)[],
    "tags"?: (string)[],
    "title"?: string,
    "topics"?: (string)[],
    "enableComments"?: true,
    "isSearchable"?: true,
    "timeToRead"?:number,
    "canComplete" ?: boolean,
    "cantLike" ?: boolean,
    "cantBookmark" ?: boolean,
    "score" ?: {
        [ladderId:string]: number
    },

    "keys": string[],
    "isLockedPopupMessage" : string,
    "keysToUnlock"?: string[],

}


export type LearningCardDataT = LearningCardVideoDataT | LearningCardHTMLDataT | LearningCardHTMLImageDataT | LearningCardQuizDataT | LearningCardBackHomeDataT | LearningCardReportDataT


export type LearningDeckDataT = {
    "lastComments"?: CommentDataT[],
    "content"?: {
        [key:string]: LearningCardDataT,
    },
    "editedAt"?: any,
    "id"?: string,
    "appId"?: string,
    "querableObject"?: LearningDeckQuerableDataT,
    "showReport":boolean,
}