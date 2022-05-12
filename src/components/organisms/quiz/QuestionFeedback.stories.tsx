import {storiesOf} from '@storybook/react-native';
import React from 'react';
import QuestionFeedbackScreen from './QuestionFeedbackScreen';
import QuizDataExample from '../../../components/templates/quiz/helper/QuizDataExample';
import QuizUtils from '../../../utils/quiz/quizUtils';
import {NavigationDecorator} from '../../../../storybook/StoryNavigator';

let quizData = {
  quizId: QuizDataExample.quizId,
  tags: [''],
  topics: QuizDataExample.topics,
  questions: QuizDataExample.questions,
};
const firstQuestion = QuizUtils.getFirstQuestion({quizData});

storiesOf('organisms', module)
  .addDecorator(getStory => getStory())
  .addDecorator(NavigationDecorator)
  .add('QuestionFeedback', () => (
    <QuestionFeedbackScreen
      canRetryQuestion={true}
      retryQuestion={() => console.warn('clicked on retry')}
      currentResultSnapshot={{}}
      activeQuestionId={firstQuestion.questionId}
      quizData={quizData}
      confirmQuestionFeedback={() => {}}
    />
  ));
