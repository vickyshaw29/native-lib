import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import Question from './Question';
import QuizDataExample from '../../../components/templates/quiz/helper/QuizDataExample';
import QuizUtils from '../../../utils/quiz/quizUtils';

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

storiesOf('atoms/Question', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Question', () => <Question questionData={questionData} />);
