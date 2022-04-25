import React from 'react';
import {Quiz} from '../components/templates';
import QuizDataExample from '../components/templates/quiz/helper/QuizDataExample';

const QuizPage = () => {
  return (
    <Quiz
      quizData={{
          quizId:QuizDataExample.quizId,
          tags:[''],
          topics:QuizDataExample.topics,
          questions:QuizDataExample.questions
      }}
      onQuizCompleted={() => {}}
      onStatusChange={() => {}}
      feedbackOptions={[]}
      canRetryQuestion
      showQuestionFeedback
    />
  );
};

export default QuizPage;
