import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
//   TextStyle,
//   GestureResponderEvent,
} from 'react-native';
import {SJText} from '..';
import useTheme from '../../../hooks/theme/useTheme';
import styles from './ButtonStyles';

const Button: React.FC<any> = ({
  light,
  isLoading,
  containerStyle,
  textStyle,
  outline,
  ...props
}) => {
  const {palette} = useTheme();

  const primaryColor = palette?.primary || '#0000f4';
  const disabledColor = palette?.disabledColor || '#cccccc';
  const backgroundColor = palette?.buttonLightBackground
    ? '#ffffff'
    : primaryColor;

  const outlineContainerStyle = {
    backgroundColor: 'transparent',
    borderColor: primaryColor,
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 14,
  };

  const outlineTextStyle = {
    color: primaryColor,
  };
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: props.disabled ? disabledColor : backgroundColor,
          ...(outline ? outlineContainerStyle : {}),
          ...containerStyle,
        },
      ]}
      {...props}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <SJText
          style={{
            color: '#ffffff',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 'bold',
            ...(outline ? outlineTextStyle : {}),
            ...textStyle,
          }}>
          {props.children}
        </SJText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
