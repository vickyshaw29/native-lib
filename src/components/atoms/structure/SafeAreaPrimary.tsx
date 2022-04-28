import React ,{ReactNode,CSSProperties} from 'react';
import { SafeAreaView } from 'react-native';
import useTheme from '../../../hooks/theme/useTheme';

const SafeAreaPrimary:React.FC<{children:ReactNode}>= ({children})  => {
    const {palette} = useTheme()
    const primaryColor = palette.primary || '#0000f4';
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: primaryColor}}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaPrimary;
