import React from 'react'
import { LearningCardDataT } from '../../../interfaces/Deck'
import {TextStyle, View} from 'react-native'
import { ButtonRound } from '../../atoms'
import styles from './NavigationButtonsStyles'

const NavigationButtons = ({ currentIndex, sliderRef, cards ,containerStyle}: { currentIndex: number, sliderRef: any, cards: LearningCardDataT[],containerStyle?:TextStyle }) => {
    return (
        <View pointerEvents="box-none" style={[
            styles.navigationContainer,
            containerStyle
        ]}>
            {currentIndex != 0 ? <ButtonRound small iconName="chevron-left" onPress={() => {
                sliderRef?.current?.snapToPrev();
            }} /> : <View></View>}
            {currentIndex < (cards.length - 1) ? <ButtonRound small iconName="chevron-right" onPress={() => {
                sliderRef.current.snapToNext();
            }} /> : <View></View>}
    
    
        </View>
    )
}

export default NavigationButtons
