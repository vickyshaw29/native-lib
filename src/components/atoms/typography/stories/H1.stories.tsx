import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../../storybook/stories/CenterView'
import React from 'react';
import {H1} from '../..';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('H1', () => (
   <H1>
       This is H1!
   </H1>
  ));
