import React from 'react'
import { LearningDeckDataT,LearningCardDataT } from '../../../interfaces/Deck'
import { TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';
import { LoadingView } from '../../atoms';

const LearningCards = ({ contentData }: { contentData: LearningDeckDataT }) => {
    const { width } = useWindowDimensions()
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const sliderRef = React.useRef();

	const [learningCardZoom, set_learningCardZoom] = React.useState<Number>(1);

	const cards: LearningCardDataT[] | null = useCards({
		contentData
	});

	const renderCardCallBack = useRenderCardCallBack({
		contentId: contentData?.id,
		currentIndex,
		cards
	})


	if (!Array.isArray(cards)) {
		return <LoadingView message='...' />
	}
    return (
        <div>
            
        </div>
    )
}

export default LearningCards
