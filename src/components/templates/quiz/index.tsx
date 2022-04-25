import React from 'react';
import useQuizPlayer from './utils/useQuizPlayer';
import QuestionFeedbackScreen from './screens/QuestionFeedbackScreen';
import QuizActiveScreen from './screens/QuestionActiveScreen';
import { AnswerDataT, Feedback, QuizDataT, ResultI } from './helper/QuizInterface';
//import { LoadingView } from '../../../../ui-kit/Structure';
import { SafeAreaView ,Text} from 'react-native';

const Quiz = ({ quizData, onQuizCompleted, onStatusChange, feedbackOptions, canRetryQuestion, showQuestionFeedback }: { showQuestionFeedback: boolean, quizData: QuizDataT, onQuizCompleted: (results:ResultI, feedbackOptions: Feedback[], quizData: QuizDataT) => void, onStatusChange: (status: string) => any, feedbackOptions: Feedback[], canRetryQuestion: boolean }) => {

	const {
		status,
		activeQuestionId,
		giveAnswer,
		retryQuestion,
		confirmQuestionFeedback,
		currentResultSnapshot,
	} = useQuizPlayer({
		quizData,
		feedbackOptions,
		onQuizCompleted,
		onStatusChange,
		showQuestionFeedback
	});


	// I quiz all'interno di notifiche

	if (status === 'questionFeedback' && activeQuestionId) {
		return <QuestionFeedbackScreen canRetryQuestion={canRetryQuestion} retryQuestion={retryQuestion} currentResultSnapshot={currentResultSnapshot} activeQuestionId={activeQuestionId} quizData={quizData} confirmQuestionFeedback={confirmQuestionFeedback} />
	}

	if (status === 'questionActive' && activeQuestionId) {
		return <QuizActiveScreen activeQuestionId={activeQuestionId} giveAnswer={giveAnswer} quizData={quizData} />
	}

	if (status === 'loading') {
		// return <LoadingView message='In caricamento' />
        return <SafeAreaView><Text>Loading...</Text></SafeAreaView>
	}

	return null
}


export default Quiz