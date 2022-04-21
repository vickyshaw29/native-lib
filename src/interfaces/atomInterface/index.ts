import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native'
export interface ButtonProps{
    title : string;
    color : string;
    onPress:()=>void;
}
export interface InputProps{
    value:string;
    onChange:(e: NativeSyntheticEvent<TextInputChangeEventData>)=>void;
}

export interface TextProps{
    val:string
}