import React from 'react'
import { LearningCardDataT } from '../../../interfaces/Deck'
import {View,TouchableOpacity,Text} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CardNum } from '../../atoms';


const DeckHeader = ({ currentIndex, sliderRef, cards }: { currentIndex: number, sliderRef: any, cards: LearningCardDataT[] }) => {
    return (
        <View
		style={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'baseline',
			padding: 16,
			paddingBottom: 0,
		}}>
		<TouchableOpacity
			style={{
				padding: 8,
				paddingRight: 4,
			}}
			disabled={currentIndex == 0}
			onPress={() => {
				sliderRef.current.snapToItem(0);
			}}
		>
			<FontAwesome5 style={{ color: currentIndex === 0 ? '#aaa' : '#333' }} name="step-backward" />
		</TouchableOpacity>
		<TouchableOpacity
			style={{
				padding: 8,
				paddingRight: 4,
			}}
			onPress={() => {
				sliderRef.current.snapToItem(cards.length - 1);
			}}
		>
			<FontAwesome5 style={{ color: currentIndex === cards.length - 1 ? '#aaa' : '#333' }} name="step-forward" />
		</TouchableOpacity>
		<View style={{
			marginLeft: 16
		}}>
			<CardNum size={cards.length} index={currentIndex} />

		</View>
		<TouchableOpacity
			style={{
				marginLeft: 'auto',
				padding: 8,
				paddingRight: 4,
			}}
			onPress={() => {
                //commenting bcoz dont have the global state
				// localSettingsState.cardTextZoom = localSettingsState.cardTextZoom ? localSettingsState.cardTextZoom * 0.9 : 0.9;
                0.9
			}}
		>
			<Text style={{ fontSize: 14 }}>A</Text>
		</TouchableOpacity>
		<TouchableOpacity
			style={{
				padding: 8,
				paddingRight: 8,
			}}
			onPress={() => {
                //commenting bcoz dont have the global state
				// localSettingsState.cardTextZoom = localSettingsState.cardTextZoom ? localSettingsState.cardTextZoom * 1.1 : 1.1;
                0.9
			}}
		>
			<Text style={{ fontSize: 18 }}>A</Text>
		</TouchableOpacity>
	</View>
    )
}

export default DeckHeader
