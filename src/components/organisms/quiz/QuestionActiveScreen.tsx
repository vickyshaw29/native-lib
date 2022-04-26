import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import QuizUtils from '../../../utils/quiz/quizUtils';
import {useNavigation} from '@react-navigation/native';
import {Question, Answer} from '../../atoms';
import styles from './styles';

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
type QuestionScreenPropsT = {
  activeQuestionId: string;
  quizData: any;
  giveAnswer: any;
};
const Quiz = ({
  activeQuestionId,
  giveAnswer,
  quizData,
}: QuestionScreenPropsT) => {
  const [preselectedAnswer, set_preselectAnswer] = React.useState<string>();
  const questionData = QuizUtils.getQuestion({
    quizData,
    questionId: activeQuestionId,
  });
  const answersData = QuizUtils.getAnswers({
    quizData,
    questionId: activeQuestionId,
  });
  const navigation = useNavigation();

  const shuffledAnswersKeys = React.useMemo(() => {
    return shuffle(Object.keys(answersData));
  }, [activeQuestionId, answersData]);
  const onSelect = (answer: any) => {
    const answerId = answer.answerId;
    if (answerId != undefined) {
      set_preselectAnswer(answerId);
      setTimeout(() => {
        giveAnswer({questionId: activeQuestionId, answerId});
        set_preselectAnswer(undefined);
      }, 1200);
    }
  };
  const answersComponents = React.useMemo(() => {
    return shuffledAnswersKeys.map((answerId: string) => {
      const isSelected = preselectedAnswer == answerId;
      const isDisabled = Boolean(preselectedAnswer);
      const answer = QuizUtils.getAnswers({
        quizData,
        questionId: activeQuestionId,
      })[answerId];

      return (
        <Answer
          key={answerId}
          answer={answer}
          isSelected={isSelected}
          isDisabled={isDisabled}
          onSelect={onSelect}
          answerStyle={styles.answer}
        />
      );
    });
  }, [activeQuestionId, shuffledAnswersKeys, QuizUtils, preselectedAnswer]);
  return (
    <ScrollView contentContainerStyle={{padding: 16, flex: 1}}>
      {questionData && (
        <Question
          questionData={questionData}
          style={{
            ...styles.question,
          }}
        />
      )}

      {answersComponents && answersComponents}

      <View style={styles.containerActive}>
        <Text>
          {' '}
          {(questionData?.order || 0) + 1} /{' '}
          {Object.keys(quizData?.questions || {}).length}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.activeTitleContainer}>
        <Text>Interrompi quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Quiz;
