import React from 'react'
import { Text, View } from 'react-native'
import { TextProps } from '../../../interfaces/atomInterface'
import styles from './TextStyles'

const CustomText = ({val}:TextProps) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{val}</Text>
        </View>
    )
}

export default CustomText
