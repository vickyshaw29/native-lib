import React from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {AnswerDataT} from '../../../interfaces/QuizInterface';
import {Text, TouchableOpacity} from 'react-native';
import styles from './AnswerStyles';

const Answer = ({
  onSelect,
  answer,
  isSelected,
  isDisabled,
}: {
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: any;
  answer: AnswerDataT;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isSelected ? '#005F73' : 'white'},
      ]}
      disabled={isDisabled}
      onPress={() => {
        onSelect(answer);
      }}>
      <Text
        style={{
          color: 'gray',
        }}>
        {answer?.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Answer;
