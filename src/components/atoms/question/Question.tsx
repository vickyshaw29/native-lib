import React from 'react';
import {View, Text} from 'react-native';
import {QuestionDataT} from '../../../interfaces/QuizInterface';
import styles from './QuestionStyles';
// import { H3 } from '../../../../../ui-kit';

const Question = ({questionData}: {questionData: QuestionDataT}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{questionData.label}</Text>
    </View>
  );
};

export default Question;
