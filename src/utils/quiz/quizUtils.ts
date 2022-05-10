// import { evaluateConditions } from "../../../../app/query";
import { evaluateCondition } from "./evaluate";
import { QuizDataT,ResultI,Feedback } from "../../interfaces/QuizInterface";
import lodash from 'lodash'

export type AreaReportT = {
    feedback: Feedback | null,
    percentage: number | null,
    maxScore: number | null,
    score: number | string | null,
    topicId: string,
    quizData: QuizDataT,
    quizResult: ResultI
}

export default class QuizUtils {
    static getScore = ( quizData: QuizDataT, quizResults:ResultI) => {

        if(!quizData || !quizResults) return null
    
        return (
          
            Object.keys(quizResults).reduce((total: number, questionId: string) => {
    
            const answerId = quizResults[questionId]
            const questionData = quizData.questions ? quizData.questions[questionId] : null
            
            if(questionData){
                const answerData = questionData.answers ? questionData.answers[answerId] : null
                const points = answerData && answerData.points
                return points ? total + points : total;
            }
            
            return total
          }, 0) || 0

        );
    }
    static getPercentage(quizData: QuizDataT, quizResults:ResultI) {

        const score = this.getScore(quizData, quizResults)
        const maxQuizScore = this.getMaxQuizScore(quizData)

        if(maxQuizScore != 0 && !Number.isNaN(maxQuizScore) && score != null && !Number.isNaN(score)){

            return Math.round((score / maxQuizScore) * 100)

        }else{
            return null
        }
       
    }
    static getMaxQuizScore = (quizData: QuizDataT) => {

        return Object.keys(quizData.questions || {}).reduce((previousMaxScore, questionId)=> {

            const questionMaxScore = this.getMaxQuestionScore(quizData, questionId)
            return previousMaxScore + questionMaxScore

        }, 0)

    }
    static getMaxQuestionScore = ( quizData: QuizDataT, questionId:string) => {

        const questionData = quizData.questions && quizData.questions[questionId] || null
        if(!questionData) return 0

        return Object.keys(questionData.answers || {}).reduce((previousMaxScore, answerId) => {

            const answerData = questionData.answers ? questionData.answers[answerId] : null
            const points =  answerData?.points || 0

            if(points > previousMaxScore){
                return points
            }else{
                return previousMaxScore
            }
            
        }, 0)
    } 
    static getAnswers = ({ quizData, questionId} : {quizData : QuizDataT, questionId: string}) => {

        const questionData = quizData.questions && quizData.questions[questionId]
        return questionData?.answers || {};

    }
    static getQuestion = ({ quizData, questionId} : {quizData : QuizDataT, questionId: string}) => {

        const questionData = quizData.questions && quizData.questions[questionId]
        return questionData || null;

    }
    static getFirstQuestion = ({quizData}: {quizData : QuizDataT}) => {

        for (const questionData of Object.values(quizData?.questions || {})) {
			if(questionData.order == 0){
				return questionData
			}
		}

		return null

    }
    static getQuestionFeedback = ({ quizData, questionId, answerId } : {quizData : QuizDataT, questionId: string, answerId: string}) => {
        
        const questionFeedbacks = quizData.questions && quizData.questions[questionId].feedbacks 

        if(!questionFeedbacks){
            return null
        }

        const questionFeedback = questionFeedbacks[answerId]
        
        if(questionFeedback){
            
            return questionFeedback
        
        }else{

            const defaultFeedback = questionFeedbacks["default"]
            
            if(defaultFeedback){
               
                return defaultFeedback
            
            }else{
                
                return null
            
            }

        }

    }  
    static getQuizFeedbacks = ({ quizData, feedbackOptions, quizResult }: { quizData: QuizDataT, feedbackOptions: Feedback[], quizResult: ResultI }) => {
                

        if(!feedbackOptions){
            return null
        }

        const context = {
            percentage: this.getPercentage(quizData, quizResult),
            maxScore: this.getMaxQuizScore(quizData),
            score: this.getScore(quizData, quizResult)
        }



        const quizFeedbacks = feedbackOptions?.filter((feedbackOption) => {


            if(evaluateCondition(feedbackOption?.conditions, context)){
                return feedbackOption
            }

        })
        return quizFeedbacks
    }

    static getAreaReport = ({ topicId, quizData, feedbackAreaOptions, quizResult }: { topicId: string, quizData: QuizDataT, feedbackAreaOptions: Feedback[], quizResult: ResultI }): AreaReportT | null=> {
                

        if(!feedbackAreaOptions){
            return null
        }

        const filteredQuizData = lodash.cloneDeep(quizData);


        for (const questionId in filteredQuizData.questions) {
            if (Object.prototype.hasOwnProperty.call(filteredQuizData.questions, questionId)) {
                const questionData = filteredQuizData.questions[questionId];
                if(!questionData.topics?.includes(topicId)){
                    delete filteredQuizData.questions[questionId]
                }
            }
        }

        const context = {
            percentage: this.getPercentage(filteredQuizData, quizResult),
            maxScore: this.getMaxQuizScore(filteredQuizData),
            score: this.getScore(filteredQuizData, quizResult)
        }



        const lastValidFeedback = feedbackAreaOptions?.reduce<Feedback | null>((lastValidFeedback ,quizFeedbackOption) => {


            // if(evaluateConditions(quizFeedbackOption.conditions, context)){
            //     return quizFeedbackOption
            // }else{
            //     return lastValidFeedback
            // }

        }, null)


        return {
            feedback: lastValidFeedback,
            topicId,
            quizData,
            quizResult,
            ...context
        }

    }
}
