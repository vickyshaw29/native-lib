import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import Square from './Square';
import SJText from '../typography/SJText';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Square', () => (
    <Square>
      <SJText style={{margin: 10}}>Hello from the Square component</SJText>
    </Square>
  ));
