import React from 'react';
import {SJTextInputT} from '../../../interfaces/atomInterface';
import {View, TextInput, TextInputProps} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useTheme from '../../../hooks/theme/useTheme';
import styles from './FormStyles';

const Form = ({
  completed,
  secureTextEntry,
  placeholder,
  placeholderTextSize,
  large,
  value,
  center,
  style,
  ...props
}: SJTextInputT) => {
  const {palette} = useTheme();
  return (
    <View
      style={{
        transform: [{scale: completed ? 1.05 : 1}],
      }}>
      {completed && (
        <View
          pointerEvents="none"
          style={[styles.container, {borderColor: palette.primary}]}
        />
      )}
      <TextInput
        placeholderTextColor={'#8c8c8c'}
        style={[
          styles.textInput,
          {
            padding: large ? 32 : 16,
            paddingTop: large ? 16 : 8,
            paddingBottom: large ? 16 : 8,
            fontSize: value === '' ? placeholderTextSize : large ? 28 : 16,
            textAlign: center && 'center',
            shadowColor: completed ? palette.primary : '#000',
            minHeight: large ? 70 : 50,
            shadowOpacity: completed ? 0.88 : 0.22,
            top: completed ? 2 : 0,
            left: completed ? 2 : 0,
            ...style,
          },
        ]}
        {...(props as TextInputProps)}
        value={value}
        editable
      />
      {completed && (
        <FontAwesome5
          style={[
            styles.icon,
            {
              color: palette.primary,
            },
          ]}
          name="check-circle"
        />
      )}
    </View>
  );
};

export default Form;
