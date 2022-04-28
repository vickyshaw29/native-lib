import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../../storybook/stories/CenterView'
import React from 'react';
import {SJText} from '../..';

storiesOf('atoms/SJText', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('SJText', () => (
   <SJText>
       This is SJText!
   </SJText>
  ));
