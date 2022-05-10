// Importo React
import lodash from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { useSnapshot } from 'valtio';
// import globalStore from '../../../../../app/globalStore';
// import { H2, H3, SJText, usePalette } from '../../../../../ui-kit';
import {H2,H3,SJText} from '../../../atoms'
import useTheme from '../../../../hooks/theme/useTheme';
import styles from './CardReportStyles'

const CardReport = ({ card, index, learningContent }:any) => {

	let learner:any={}
	const { palette } = useTheme();


	const quizResults = learner?.modules?.quiz?.quizResults;

	const learningContentQuizResults:any = {}

	quizResults && lodash.orderBy(lodash.values(learningContent.content), ['order']).forEach((card, index) => {
		if (card.type === 'Quiz') {
			learningContentQuizResults[card.quiz] = { ...quizResults[card.quiz], order: index, id: card.quiz };
		}
	}, {});


	return (
		<View
			style={[styles.card,{ backgroundColor: palette.primary}]}>
			<H2 textLight bold style={{ marginBottom: 32 }}>Report finale</H2>
			<H3 textLight style={{ marginBottom: 32 }}>Risultato dei quiz</H3>
			{lodash.orderBy(lodash.values(learningContentQuizResults), ['order']).map(result => {
				return <View>
					{result.lastResult && <>
						<View style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
							<View style={{ borderWidth: 1, borderColor: '#ffffff', borderRadius: 4, padding: 8, width: 36, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
								<SJText textLight>{result.order}</SJText>
							</View>
							<SJText style={{ marginLeft: 16, marginTop: 0 }} textLight>{(result.lastResult.percentage * 100).toFixed(2)}%</SJText>

						</View>
					</>}
					{!result.lastResult && <>
						<View style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
							<View style={{ borderWidth: 1, borderColor: '#ffffff', borderRadius: 4, padding: 8, width: 36, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
								<SJText textLight>{result.order}</SJText>
							</View>
							<SJText style={{ marginLeft: 16 }} textLight>-</SJText>

						</View>
					</>}
				</View>
			})}

			{/* <H3 textLight style={{ marginTop: 32}}>Punteggio ottenuto</H3> */}


		</View>
	);
};

export default CardReport;
