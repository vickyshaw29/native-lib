import React ,{useEffect,useState} from 'react';
import useQuizPlayer from '../../../hooks/quizHook/useQuizPlayer';
import { QuestionFeedbackScreen,QuizActiveScreen } from '../../organisms';
import { AnswerDataT, Feedback, QuizDataT, ResultI } from '../../../interfaces/QuizInterface';
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
	const [foundStatus, setfoundStatus] = useState<string>(status)
	useEffect(()=>{
		setfoundStatus(status)
	},[status])

	// I quiz all'interno di notifiche

	if (foundStatus === 'questionFeedback' && activeQuestionId) {
		return <QuestionFeedbackScreen canRetryQuestion={canRetryQuestion} retryQuestion={retryQuestion} currentResultSnapshot={currentResultSnapshot} activeQuestionId={activeQuestionId} quizData={quizData} confirmQuestionFeedback={confirmQuestionFeedback} />
	}

	if (foundStatus === 'questionActive' && activeQuestionId) {
		return <QuizActiveScreen activeQuestionId={activeQuestionId} giveAnswer={giveAnswer} quizData={quizData} />
	}

	if (foundStatus === 'loading') {
		// return <LoadingView message='In caricamento' />
        return <SafeAreaView><Text>Loading...</Text></SafeAreaView>
	}

	return null
}


export default Quiz