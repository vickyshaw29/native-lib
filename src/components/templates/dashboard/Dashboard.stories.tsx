import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import { Dashboard } from '..';
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
const questionData = QuizUtils.getQuestion({
  quizData,
  questionId: firstQuestion?.questionId,
});

storiesOf('templates/Dashboard', module)
  .addDecorator(getStory => getStory())
  .addDecorator(NavigationDecorator)
  .add('Dashboard', () => (
    <Dashboard
 
    />
  ));
