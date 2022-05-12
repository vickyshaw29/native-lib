import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../../storybook/stories/CenterView'
import React from 'react';
import {H3} from '../..';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('H3', () => (
   <H3>
       This is H3!
   </H3>
  ));
