import React from 'react';

import {TextStyle, View} from 'react-native';
import {SJText} from '..';
import useTheme from '../../../hooks/theme/useTheme';
import styles from './CardNumStyles';

type CardNumType={
    index:number,
    size:number,
    style?:TextStyle
}

const CardNum = ({index,size,style}: CardNumType) => {
  const {palette} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: palette.primary},style]}>
      <SJText
        style={{
          color: palette.textOnPrimary,
          fontWeight: 'normal',
          fontSize: 16,
        }}>
        {index + 1}/{size}
      </SJText>
    </View>
  );
};

export default CardNum;
