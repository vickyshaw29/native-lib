import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import {SafeAreaViewWithPrimaryBackground, SJText} from '..';

storiesOf('atoms/SafeAreaPrimary', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('SafeArea', () => (
    <SafeAreaViewWithPrimaryBackground>
      <SJText style={{color: '#fff'}}>Hello from safe area with primary</SJText>
    </SafeAreaViewWithPrimaryBackground>
  ));
