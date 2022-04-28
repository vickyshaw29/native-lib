import React from 'react';
import useTheme from '../../../hooks/theme/useTheme';
import { SafeAreaView } from 'react-native';

const SafeAreaWithColor =({ children, color }: { children: React.ReactNode; color: string }) => {
    const {palette} = useTheme();
	const primaryColor = palette?.primary || '#0000f4';
	const safeAreaColor = color || primaryColor;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: safeAreaColor}}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWithColor;
