import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Feedback, QuizDataT, ResultI } from '../../../../interfaces/QuizInterface';
import { LearningCardQuizDataT } from '../../../../interfaces/Deck';
import { useSnapshot } from 'valtio';
import {registerQuizReport,notifyPointWithPopup} from '../../../../common/mock';
import { SJText,Button,LoadingView } from '../../../atoms';
import useTheme from '../../../../hooks/theme/useTheme';
// import QuizComponent, { onQuizCompletedCallbackPropsI } from '../../../../../@commons/components/Quiz';
import {Quiz} from '../../../templates'
import QuizUtils from '../../../../utils/quiz/quizUtils';
import { HTMLRenderer } from '../..';
import QuizDataExample from '../../../templates/quiz/helper/QuizDataExample';

export type onQuizCompletedCallbackPropsI = {results:ResultI, quizData: QuizDataT, feedbackOptions?: Feedback[]}
export type onQuizCompletedCallbackI = (props ?: onQuizCompletedCallbackPropsI ) => void

var styles = StyleSheet.create({
	card: {
		display: 'flex',
		padding: 16,
		borderRadius: 8,
		backgroundColor: '#fff',
		flex: 1,
		margin: 16,
		borderWidth: 1,
		borderColor: '#ddd',
		justifyContent: 'center',
		flexDirection: 'column',
		marginBottom: 32,
		paddingTop: 24,
	},
});

type CardQuizPropsT = { card: LearningCardQuizDataT, contentId: string }

const CardQuiz = ({ card, contentId } : CardQuizPropsT) => {

	const [status, set_status] = useState<"loading" | "introScreen" | "quizScreen" | "feedbackScreen">("loading")
	
	let globalStore={
        activeLearner:{
            learnerReport:{
                linkReports:true,
				quizResults:""
            },
            registerLinkReport:()=>{},
            addPoints:()=>{}
        },
        activeApp:{
            appId:'GEOX',
			masters:{
				quiz:""
			}
        },

    }
	
	const { width } = useWindowDimensions()
	const {palette} = useTheme();
	
	const intro = card.intro
	const quizId = card.quizId
	const order = card.order
	const showFeedback = Boolean(card.showFeedback)
	const showQuestionFeedback = Boolean(card.showQuestionFeedback)
	const showIntro = Boolean(card.showIntro)
	const feedbackOptions:any = card.feedbackOptions
	const cardId = card.cardId
	const skippable = Boolean(card.skippable)
	const retry = Boolean(card.retry)
	const score = card.score
	const givePointsOnlyAtFirstTry = Boolean(card.givePointsOnlyAtFirstTry)
	const givePointsOnlyWithPositiveScore = Boolean(card.givePointsOnlyWithPositiveScore)
	const canRetryQuestion = Boolean(card.canRetryQuestion)

	//&&globalStore?. activeLearner?.learnerReport.quizResults[quizId] -->commenting out !
	const previousResults:any = quizId &&globalStore?. activeLearner?.learnerReport?.quizResults  || {};
	// const quizDataSnapshot = quizId &&globalStore?. activeApp?.masters?.quiz 
	const quizDataSnapshot= {
		quizId: QuizDataExample.quizId,
		tags: [''],
		topics: QuizDataExample.topics,
		questions: QuizDataExample.questions,
	  };

	const feedbacks:any = useRef(QuizUtils.getQuizFeedbacks({ quizData: quizDataSnapshot, feedbackOptions, quizResult: previousResults.lastResult?.results}));
	

	const onCompleted = useCallback(({results, feedbackOptions, quizData} : onQuizCompletedCallbackPropsI) => {

		// feedbacks.current = feedbackOptions ? QuizUtils.getQuizFeedbacks({ quizData, feedbackOptions, quizResult: results}) : null
		// // const isPositiveScore = feedback?.current?.isPositive
		// const isFirstTry = !Boolean(previousResults.lastResult?.results)

		// quizId && Object.keys(results).length && registerQuizReport();

		// // if (
		// // 	(givePointsOnlyAtFirstTry ? isFirstTry : true) && 
		// // 	(givePointsOnlyWithPositiveScore ? isPositiveScore : true)
		// // ){
		// // 	score && addPoints(score);
		// // 	score && notifyPointWithPopup({ score: score })
		// // }

		// set_status("feedbackScreen");

	}, [previousResults, contentId, quizId, score, givePointsOnlyAtFirstTry, givePointsOnlyWithPositiveScore]);

	if (!quizDataSnapshot) {
		return <SJText>Loading</SJText>
	}

	useEffect(()=>{
		if(previousResults?.lastResult){
			set_status("feedbackScreen")
		}else {
			set_status("quizScreen");
		}
	}, [])


	const doRetry = () => {
		set_status("quizScreen");
	}


	return (
		<View style={{ ...styles.card, backgroundColor: palette.primary }}>

			<View style={{
				backgroundColor: palette.primary,
				padding: 16,
				paddingVertical: 8,
				width: 100,
				borderRadius: 16,
				position: 'absolute',
				top: -16,
				left: "50%",
				marginLeft: -50,
			}}>
				<SJText style={{ color: palette.textOnPrimary, textAlign: 'center' }}>QUIZ</SJText>
			</View>


			{ status === 'loading' && <LoadingView /> }
			{/* { status === 'introScreen' && <IntroScreen /> } */}
			{ status === 'feedbackScreen' && <View>

			{ feedbackOptions && feedbackOptions.map((feedback:any)=><HTMLRenderer componentData={{ componentId: "Feedback"+feedback.value, source: feedback?.description }} />)}
			{ retry && <Button onPress={doRetry}>
				<SJText>Riprova</SJText>
			</Button> }

								
			</View> }
			{ status === 'quizScreen' && <Quiz onStatusChange={(status:string) => null} onQuizCompleted={()=>{}} quizData={quizDataSnapshot as QuizDataT} feedbackOptions={feedbackOptions || []} canRetryQuestion={canRetryQuestion} showQuestionFeedback={showQuestionFeedback} /> }
			


		</View>
	);
};

export default CardQuiz