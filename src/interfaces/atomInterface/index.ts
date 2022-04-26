import {NativeSyntheticEvent, TextInputChangeEventData,GestureResponderEvent} from 'react-native';
export interface ButtonProps {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void
}
export interface InputProps {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export interface TextProps {
  val: string;
}
export type ListProps={
  data:string[],
  isNavigate:boolean;
  navigate?: (value: string) => void;
  style?:{
    [key:string]:any
  }
}

