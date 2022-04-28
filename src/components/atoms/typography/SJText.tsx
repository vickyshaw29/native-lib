import React from 'react'
import { SJTextStylePropsT } from '../../../interfaces/atomInterface'
// import {useSnapshot} from 'valtio';
import {boldTextFontFamily,regularTextFontFamily,primaryColor,secondaryColor,textGray,textLight} from './helper/Helper'
import {Text} from 'react-native'



const SJText:React.FC<SJTextStylePropsT> = ({children,style, ...props}) => {
    const textFontFamily = props.bold ? boldTextFontFamily : regularTextFontFamily;
    return (
        <Text
			style={{
				fontFamily: textFontFamily,
				fontSize: props.small ? 14 : 16,
				fontWeight: props.bold ? 'bold' : 'normal',
				...(props.center && {textAlign: 'center'}),
				...(props.underline && {textDecorationLine: 'underline'}),
				...(props.primary && {color: primaryColor}),
				...(props.secondary && {color: secondaryColor}),
				...(props.textLight && {color: textLight}),
				...(props.textGray && {color: textGray}),
				...(props.h2 && { fontSize: 22}),
				...style,
			}}
			{...props}>
			{children}
		</Text>
    )
}

export default SJText
