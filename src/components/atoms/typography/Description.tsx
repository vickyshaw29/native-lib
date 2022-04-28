import React, {ReactNode} from 'react';
import {SJTextStylePropsT} from '../../../interfaces/atomInterface';
import {TextStyle} from 'react-native';
import {SJText} from '..';

type Props = SJTextStylePropsT | {style?: TextStyle; children: ReactNode};
const Description: React.FC<Props> = ({children, style, ...props}) => {
  return (
    <SJText
      textGray
      style={{
        ...style,
      }}
      {...props}>
      {children}
    </SJText>
  );
};

export default Description;
