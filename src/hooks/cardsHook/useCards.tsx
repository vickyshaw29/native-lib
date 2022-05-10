import React from "react";
import { LearningDeckDataT } from "../../interfaces/Deck";
import lodash from 'lodash';
import ebi from "../../common/eb";

export const useCards = ({ contentData }: { contentData: LearningDeckDataT }) => {

	return React.useMemo(() => {
		if (contentData?.content) {

			var tempCards:any = lodash.orderBy(lodash.values(contentData?.content), ['order'])

			if (contentData?.showReport) {
				tempCards.push({
					type: "report",
					html: "",
					cardId: "reportDefault",
					order: tempCards.length,
				});
			}

			tempCards.push({
				type: "backHome",
				html: "",
				cardId: "reportDefault",
				order: tempCards.length,
			});


			ebi.emit("SNAPTOCARD_EVENT_I", { 
				type: "SNAPTOCARD_EVENT_I",
				payload: {
					snappedIndex: 0, 
					previousIndex: null, 
					lastIndex: tempCards.length - 1 
				}
			});

			return tempCards;

		}
		return null;
	}, [contentData?.content])
}