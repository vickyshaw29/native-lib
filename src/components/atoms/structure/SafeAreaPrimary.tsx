import React ,{ReactNode,CSSProperties} from 'react';
import { SafeAreaView } from 'react-native';
import useTheme from '../../../hooks/theme/useTheme';

const SafeAreaPrimary = (props: React.PropsWithChildren<ReactNode> & CSSProperties)  => {
    const {palette} = useTheme()
    const primaryColor = palette.primary || '#0000f4';
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: primaryColor}}>
      {props.children}
    </SafeAreaView>
  );
};

export default SafeAreaPrimary;
