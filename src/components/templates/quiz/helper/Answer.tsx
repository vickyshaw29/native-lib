import React from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { AnswerDataT, QuizDataT } from './QuizInterface';
import {Text,TouchableOpacity} from 'react-native'


const Answer = ({ onSelect, answer, isSelected, isDisabled }: { isSelected: boolean, isDisabled: boolean, onSelect: any, answer: AnswerDataT }) => {


    return <TouchableOpacity style={{
        marginTop: 8,
        marginBottom: 8,
        padding: 16,
        backgroundColor: isSelected ? '#005F73' : 'white',
        shadowColor: "#000",
        // backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 4,
        elevation: 5,
    }}
        disabled={isDisabled}
        onPress={()=>{ onSelect(answer) }}
    >
        <Text style={{
            color: "gray"
        }}>{answer?.label}</Text>
    </TouchableOpacity>
}

export default Answer