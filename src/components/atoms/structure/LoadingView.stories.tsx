import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import {LoadingView, SJText} from '..';

storiesOf('atoms/LoadingView', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('LoadingView', () => (
    <LoadingView message="This is Loading view's message"/>
  ));
