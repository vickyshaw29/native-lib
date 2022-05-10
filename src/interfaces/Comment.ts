export type CommentDataT = {
    commentId:string,
    learnerMeta?: {
        avatar?: string,
        nicename?: string,
    },
    createdAt?: number,
    message?: string
}