import React, { ReactNode } from 'react'
import {TextStyle, View} from 'react-native'
import styles from './CardStyles'

const Card: React.FC<{style?: TextStyle,children:ReactNode}> = ({style,children, ...props}) => {
	return (
		<View
            style={[styles.cardContainer,style]}
            {...props}
            >
			{children}
		</View>
	);
};

export default Card
