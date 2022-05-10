import React from 'react';
import useTheme from '../../../hooks/theme/useTheme';
import {TouchableOpacity, ActivityIndicator, TextStyle,GestureResponderEvent} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './ButtonStyles';

//getting error from the library ;

type ButtonRoundProps={
    disabled?:boolean,
    small?:boolean,
    isLoading?:boolean,
    iconName?:string,
    style?:TextStyle,
    onPress: (event: GestureResponderEvent) => void
}



const ButtonRound: React.FC<ButtonRoundProps> = ({disabled,small,isLoading,iconName,style,onPress}) => {
  const {palette} = useTheme();
  // const primaryColor = activeApp?.data?.modules?.core?.theme?.palette?.primary || '#0000f4';
  // const disabledColor = activeApp?.data?.modules?.core?.theme?.palette?.disabledColor || '#cccccc';
  const primaryColor = palette?.primary || '#0000f4';
  const disabledColor = palette?.disabledColor || '#cccccc';
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.btnRoundContainer,
        {
          backgroundColor: disabled ? disabledColor : primaryColor,
          ...(small && {height: 32, width: 32}),
        },
        style
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <FontAwesome5
          size={small ? 16 : 22}
          style={{
            color: '#ffffff',
          }}
          name={iconName?iconName:''}
          
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonRound;
