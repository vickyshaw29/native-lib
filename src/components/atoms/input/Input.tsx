import React from 'react';
import {Text, View, TextInput} from 'react-native';
import { InputProps } from '../../../interfaces/atomInterface';
import styles from './InputStyles'

const Input = ({value,onChange}:InputProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChange={onChange}
        value={value}
      />
    </View>
  );
};

export default Input;
