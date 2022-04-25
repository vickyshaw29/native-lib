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
      {feedback && <Text>{feedback}</Text>}
      <Button
        title="Continua"
        color=""
        onPress={() => {
          confirmQuestionFeedback({
            questionId: activeQuestionId,
            answerId: activeAnswerId,
          });
        }}
      />
      {canRetryQuestion && (
        <Button
          title="Riprova"
          color=""
          onPress={() => {
            retryQuestion({questionId: activeQuestionId});
          }}
        />
      )}
    </View>
  );
};

export default QuizFeedbackScreen;
