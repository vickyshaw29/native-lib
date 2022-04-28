import React from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {AnswerDataT, Style} from '../../../interfaces/QuizInterface';
import {TouchableOpacity} from 'react-native';
import {SJText} from '..';
import styles from './AnswerStyles';
import useGetData from '../../../hooks/theme/useGetData';

const Answer = ({
  onSelect,
  answer,
  isSelected,
  isDisabled,
  answerStyle,
}: {
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: any;
  answer: AnswerDataT;
  answerStyle: Style;
}) => {
  const {palette} = useGetData();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isSelected ? '#005F73' : 'white'},
        answerStyle,
      ]}
      disabled={isDisabled}
      onPress={() => {
        onSelect(answer);
      }}>
      <SJText
        style={{
          color: (isSelected && palette?.textOnPrimary) || undefined,
        }}>
        {answer?.label}
      </SJText>
    </TouchableOpacity>
  );
};

export default Answer;
