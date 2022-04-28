import React, {ReactNode} from 'react';
import {SJTextStylePropsT} from '../../../interfaces/atomInterface';
import {TextStyle} from 'react-native';
import {SJText} from '..';

type Props = SJTextStylePropsT | {style?: TextStyle; children: ReactNode};
const H1: React.FC<Props> = ({children, style, ...props}) => {
  return (
    <SJText
      bold
      style={{
        fontSize: 54,
        lineHeight: 60,
        letterSpacing: -0.3,
        marginTop: 16,
        ...style,
      }}
      {...props}>
      {children}
    </SJText>
  );
};

export default H1;
