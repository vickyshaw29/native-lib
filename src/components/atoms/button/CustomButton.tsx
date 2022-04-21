import React from 'react';
import {View, Button, Text} from 'react-native';
import { ButtonProps } from '../../../interfaces/atomInterface';

const CustomButton = ({title,color,onPress}:ButtonProps) => {
  return (
    <View>
      <Button
        onPress={onPress}
        title={title}
        color={color}
      />
    </View>
  );
};

export default CustomButton;
