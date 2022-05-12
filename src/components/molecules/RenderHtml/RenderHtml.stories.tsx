import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import {HTMLRenderer} from '..'
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

const feedback =
    // firstQuestion.answerId != undefined &&
    QuizUtils.getQuestionFeedback({
      quizData,
      questionId: firstQuestion.questionId,
      answerId: firstQuestion.answerId,
    });

storiesOf('molecules', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .addDecorator(NavigationDecorator)
  .add('HTMLRenderer', () => (
    <HTMLRenderer componentData={{source: feedback, componentId: ''}}/>
  ))