import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  QuizDataT,
  QuizResultsI,
  ResultI,
} from '../../../interfaces/QuizInterface';
//import HTMLRenderer from '../../HTMLRenderer';
import QuizUtils from '../../../utils/quiz/quizUtils';
import {Button} from '../../atoms';
import {HTMLRenderer} from '../../molecules';

type QuizFeedbackScreenPropsT = {
  quizData: QuizDataT;
  activeQuestionId: string;
  canRetryQuestion: boolean;
  currentResultSnapshot: ResultI;
  retryQuestion: ({questionId}: {questionId: string}) => void;
  confirmQuestionFeedback: ({
    questionId,
    answerId,
  }: {
    questionId: string;
    answerId: string;
  }) => void;
};

const QuizFeedbackScreen = ({
  currentResultSnapshot,
  confirmQuestionFeedback,
  activeQuestionId,
  quizData,
  canRetryQuestion,
  retryQuestion,
}: QuizFeedbackScreenPropsT) => {
  const activeAnswerId = currentResultSnapshot[activeQuestionId];

  const feedback =
    activeAnswerId != undefined &&
    QuizUtils.getQuestionFeedback({
      quizData,
      questionId: activeQuestionId,
      answerId: activeAnswerId,
    });
  return (
    <View>
      {/* {feedback && <Text>{feedback}</Text>} */}
      {feedback ? (
        <HTMLRenderer componentData={{source: feedback, componentId: ''}} />
      ) : null}
      <Button
        title="Continua"
        color=""
        onPress={() => {
          confirmQuestionFeedback({
            questionId: activeQuestionId,
            answerId: activeAnswerId,
          });
        }}
        // style={{padding:10}}
        containerStyle={{backgroundColor: '#0000f4'}}>
        Continua
      </Button>
      {canRetryQuestion && (
        <Button
          title="Riprova"
          color=""
          onPress={() => {
            retryQuestion({questionId: activeQuestionId});
          }}
          containerStyle={{backgroundColor: '#005F73', marginVertical: 10}}>
          Riprova
        </Button>
      )}
    </View>
  );
};

export default QuizFeedbackScreen;
