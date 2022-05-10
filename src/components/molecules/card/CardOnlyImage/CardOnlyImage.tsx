import React from 'react';
import {StyleSheet, View} from 'react-native';
import { LearningCardHTMLImageDataT } from '../../../../interfaces/Deck';
// import FirebaseStorageImage from '../../../../../app/storage/FirebaseStorageImage';
import { FirebaseStorageImage } from '../../../atoms';
import styles from '../cardHTML/CardHTMLStyles'
const CardOnlyImage = ({card, index} : { card:LearningCardHTMLImageDataT, index: number}) => {

	return (
		<View style={styles.card}>
			<View>
				<View>
					<FirebaseStorageImage path={card.media} resizeMode="contain" height={300} style={{minHeight: 300}} />
				</View>
			</View>
		</View>
	);
};

export default CardOnlyImage