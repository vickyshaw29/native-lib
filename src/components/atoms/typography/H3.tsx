import React, {ReactNode} from 'react';
import {SJTextStylePropsT} from '../../../interfaces/atomInterface';
import {TextStyle} from 'react-native';
import {SJText} from '..';

type Props = SJTextStylePropsT | {style?: TextStyle; children: ReactNode};
const H2: React.FC<Props> = ({children, style, ...props}) => {
  return (
    <SJText
      style={{
        fontSize: 20,
        letterSpacing: -0.3,
        ...style,
      }}
      {...props}>
      {children}
    </SJText>
  );
};

export default H2;
