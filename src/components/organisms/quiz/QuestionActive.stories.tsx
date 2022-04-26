import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import QuestionActiveScreen from './QuestionActiveScreen'
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


storiesOf('organisms/QuestionActive', module)
  .addDecorator(getStory => getStory())
  .addDecorator(NavigationDecorator)
  .add('ActiveQuestion', () => (
    <QuestionActiveScreen
    activeQuestionId={firstQuestion?.questionId} giveAnswer={()=>console.warn("clicked ")} quizData={quizData}
    />
  ));
