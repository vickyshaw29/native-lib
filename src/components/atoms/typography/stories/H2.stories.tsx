import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../../storybook/stories/CenterView'
import React from 'react';
import {H2} from '../..';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('H2', () => (
   <H2>
       This is H2!
   </H2>
  ));
