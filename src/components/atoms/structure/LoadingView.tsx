import React from 'react';
import useTheme from '../../../hooks/theme/useTheme';
import {useWindowDimensions, ActivityIndicator, View} from 'react-native';
import {H3} from '..';
import styles from './StructureStyles';

const LoadingView = ({message}: {message?: string}) => {
  const {palette} = useTheme();
  const {width, height} = useWindowDimensions();
  const primaryColor = palette?.primary || '#0000f4';
  return (
    <View
      style={[
        styles.loadingViewContainer,
        {backgroundColor: primaryColor, height: height, width: width},
      ]}>
      {message && <H3 style={{color: '#ffffff'}}>{message}</H3>}
      {!message && <ActivityIndicator color="white" size="large" />}
    </View>
  );
};

export default LoadingView;
