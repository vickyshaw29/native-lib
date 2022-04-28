import React, { ReactNode } from 'react'
import useTheme from '../../../hooks/theme/useTheme';
import {View} from 'react-native'

const Box:React.FC<{ style?: any, primary?: boolean,children:ReactNode }> = ({ style, ...props }) => {
    const {palette} =useTheme()
    const primaryColor = palette?.primary || '#0000f4';
    return (
        <View
        style={{
            ...(props.primary && {backgroundColor: primaryColor}),
            ...style,
        }}>
        {props.children}
    </View>
    )
}

export default Box
