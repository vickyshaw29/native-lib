import React from 'react';
import useTheme from '../../../hooks/theme/useTheme';
import {useWindowDimensions, View} from 'react-native';
import styles from './SquareStyles';

const Square = ({...props}) => {
  const {palette} = useTheme();
  const primaryColor = palette?.primary || '#0000f4';
  const {width} = useWindowDimensions();
  const boxWidth = width / 2 - 8;
  return (
    <View
      style={{
        flexBasis: boxWidth,
      }}>
      <View style={[styles.squareContainer, {height: boxWidth - 16}]}>
        {props.children}
      </View>
    </View>
  );
};

export default Square;
