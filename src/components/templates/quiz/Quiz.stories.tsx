import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Quiz from './index';
import QuizDataExample from '../../../components/templates/quiz/helper/QuizDataExample';
import {NavigationDecorator} from '../../../../storybook/StoryNavigator';



storiesOf('templates', module)
  .addDecorator(getStory => getStory())
  .addDecorator(NavigationDecorator)
  .add('Quiz', () => (
    <Quiz
      quizData={{
        quizId: QuizDataExample.quizId,
        tags: [''],
        topics: QuizDataExample.topics,
        questions: QuizDataExample.questions,
      }}
      onQuizCompleted={() => {}}
      onStatusChange={() => {}}
      feedbackOptions={[]}
      canRetryQuestion
      showQuestionFeedback
    />
  ));
