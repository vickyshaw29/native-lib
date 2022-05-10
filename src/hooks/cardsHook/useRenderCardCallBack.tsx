import React ,{useCallback} from "react";
import { LearningCardDataT } from "../../interfaces/Deck";
import { CardHTML } from "../../components/molecules";

export const  useRenderCardCallBack = ({ currentIndex, cards, contentId } : { currentIndex: number, cards: LearningCardDataT[] | null, contentId?: string }) => {

	return useCallback(({ item, index }:any) => {

		if(!contentId || cards == null){
			return null
		}

		if (item.type === 'Testo') {
			return <CardHTML card={item} index={index} />;
		}
		if (item.type === 'Quiz') {

			return (
				<CardQuiz
					contentId={contentId}
					card={item}
				/>
			);
		}


		if (item.type === 'Testo + immagine') {
			return <CardImage currentIndex={currentIndex} card={item} index={index} num={cards.length} />;
		}
		if (item.type === 'Testo + video') {
			return <CardVideoHTML currentIndex={currentIndex} card={item} index={index} num={cards.length} />;
		}
		if (item.type === 'Immagine') {
			return <CardOnlyImage currentIndex={currentIndex} card={item} index={index} num={cards.length} />;
		}
		if (item.type === 'Video') {
			return <CardVideo card={item} index={index} num={cards.length} />;
		}
		// if (item.type === 'report') {
		// 	return <CardReport currentIndex={currentIndex} card={item} index={index} num={cards.length} />;
		// }
		if (item.type === 'backHome') {
			return <CardBackHome />;
		}

		return (
			<View style={{ backgroundColor: 'red', minHeight: 250 }}>
				<Text>{item.type}</Text>
			</View>
		)
	}, [currentIndex, cards])


}