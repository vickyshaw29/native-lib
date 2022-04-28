import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';
import {ReactChild, ReactNode} from 'react';
export interface ButtonProps {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
}
export interface InputProps {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export interface TextProps {
  val: string;
}
export type ListProps = {
  data: string[];
  isNavigate: boolean;
  navigate?: (value: string) => void;
  style?: {
    [key: string]: any;
  };
};

export type SJTextStylePropsT = {
  primary?: boolean;
  secondary?: boolean;
  underline?: boolean;
  center?: boolean;
  bold?: boolean;
  textGray?: boolean;
  textLight?: boolean;
  small?: boolean;
  style?: TextStyle;
  h2?: boolean;
  children: ReactNode;
};

export type SJTextInputT = {
	completed?: boolean;
	placeholderTextSize?: number;
	placeholder?: string;
	large?: boolean;
	value?: string;
	center?: boolean;
	style?: any;
	secureTextEntry?: boolean;
	onChangeText?: (param:string) => any
};

export type SimpleHeaderT = {
	onLeftIconName?: string;
	onLeftAction?: any;
	headerTitle?: string;
	onLeftIconStyle?: any;
	onRightIconName?: string;
	onRightAction?: any;
	onRightIconStyle?: any;
	barStyle?: any;
};