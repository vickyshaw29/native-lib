import React from 'react';
import { StyleSheet, View, useWindowDimensions, TextStyle } from 'react-native';
// import { Button, H2, SJText } from '../../../../../ui-kit';
import { Button,H2,SJText } from '..';
import { useNavigation } from '@react-navigation/core';
import styles from './ViewBackHomeStyles'

type ViewBackHomeType={
    style?:TextStyle
}

const ViewBackHome:React.FC<ViewBackHomeType> = ({style}) => {

	const navigation = useNavigation();
	const { width } = useWindowDimensions();

	const routes = navigation.getState()?.routes;
	const prevRoute:any = routes[routes.length - 2]; // -2 because -1 is the current route

	const message = prevRoute?.name == "Home" && "Torna alla Home" || (prevRoute?.params?.label && "Torna a " + prevRoute?.params?.label) || "Torna alla Home"

	return (
		<View style={[styles.cardContainer,style]}>

			<H2 primary style={{
				marginBottom: 16
			}}>Hai completato il contenuto</H2>

				<Button onPress={() => {
				navigation.goBack();
			}}>
					<SJText>{message}</SJText>

				</Button>

		</View>
	);
};


export default ViewBackHome