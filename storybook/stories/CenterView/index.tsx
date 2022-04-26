import React from 'react';
import {View} from 'react-native';
import styles from './style';

interface Props {
  children: any;
}

export const CenterView = (props: Props) => {
  return <View style={styles.main}>{props.children}</View>;
};
