import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './StructureStyles';

const ErrorView = ({children}: {children: ReactNode[]}) => {
  return <View style={styles.errorContainer}>{children}</View>;
};

export default ErrorView;
