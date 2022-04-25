import React from 'react';
import { View,Text } from 'react-native';
import { QuestionDataT } from '../../../interfaces/QuizInterface';
// import { H3 } from '../../../../../ui-kit';



const Question = ({ questionData }: { questionData: QuestionDataT }) => {
    return <View style={{
        marginTop: 16,
        marginBottom: 16,
        paddingVertical: 16
    }}>
        <Text>{questionData.label}</Text>
    </View>
}

export default Question