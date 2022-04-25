import { useState, useEffect, useMemo } from 'react';
import { Feedback, QuizDataT, QuizResultI, QuizResultsI, ResultI } from '../helper/QuizInterface';
import { proxy, useSnapshot } from 'valtio';
import QuizUtils from './quizUtils'; 


const useQuizPlayer = ({ quizData, onQuizCompleted, onStatusChange, feedbackOptions, showQuestionFeedback }: { showQuestionFeedback: boolean, feedbackOptions: Feedback[], quizData: QuizDataT, onQuizCompleted: (results:ResultI, feedbackOptions: Feedback[], quizData: QuizDataT) => void , onStatusChange: (status:string) =>  any }) => {

	const [activeQuestionId, set_activeQuestionId] = useState<string | null>(null);
	const [status, set_status] = useState<'questionFeedback' | 'questionActive' | 'loading'>('loading');
	
	const currentResultState = useMemo(()=>{
		return proxy({}) as ResultI
	}, [quizData]);
	
	const currentResultSnapshot = useSnapshot(currentResultState);
	
	// Serve a abloccare l'eventuale tasto chiudi del popup. Quando il quiz è completato si assume che la motifica sia copletata. 
	// Si può migliorare certamente questa parte. Effettivamente il fatto che sblocchi o no dovrebbe essere un parametro del quiz. 

	useEffect(() => {
			onStatusChange(status)
	 }, [status])

	useEffect(()=>{
		startQuiz();
	}, [])

	const startQuiz = () => {
		
		const firstQuestion = QuizUtils.getFirstQuestion({ quizData });
		set_activeQuestionId(firstQuestion?.questionId || null);
		set_status("questionActive")
	}

	const giveAnswer = ({answerId, questionId} : {answerId:string, questionId:string})=>{
		

		currentResultState[questionId] = answerId;


		
		if(showQuestionFeedback){
			set_status("questionFeedback")
		}else{
			next();
			set_status("questionActive")
		}
		
	}

	const confirmQuestionFeedback = () => {
		next();
	}

	const retryQuestion = ({ questionId} : {questionId:string}) => {
		delete currentResultState[questionId];
		set_status("questionActive");
	}
	 

	const next = () => {

		if(activeQuestionId){

			const questionData = QuizUtils.getQuestion({ quizData, questionId: activeQuestionId})
			const nextIndex = questionData?.return || null

			if(nextIndex === true){
				onQuizCompleted(currentResultState, feedbackOptions, quizData);
			}else{

				set_status("questionActive")
				set_activeQuestionId(nextIndex);
				return { nextIndex, status };

			}

		}

	}

	return {
		giveAnswer,
		confirmQuestionFeedback,
		retryQuestion,
		status,
		activeQuestionId,
		currentResultSnapshot
	};
};

export default useQuizPlayer;