import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import {SafeAreaViewWithColor, SJText} from '..';

storiesOf('atoms/SafeAreaWithColor', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('SafeAreaWithColor', () => (
    <SafeAreaViewWithColor color="green">
      <SJText style={{color: '#fff'}}>Hello from safe area with color</SJText>
    </SafeAreaViewWithColor>
  ));
