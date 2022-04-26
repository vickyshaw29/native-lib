import React from 'react';
import {View, Text} from 'react-native';
import {QuestionDataT,Style} from '../../../interfaces/QuizInterface';
import styles from './QuestionStyles';
// import { H3 } from '../../../../../ui-kit';

const Question = ({questionData,style}: {questionData: QuestionDataT,style:Style}) => {
  return (
    <View style={[styles.mainContainer,style]}>
      <Text>{questionData.label}</Text>
    </View>
  );
};

export default Question;
