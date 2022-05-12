import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import {ErrorVxiew, SJText} from '..';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('ErrorView', () => (
    <ErrorVxiew>{[<SJText>Hello from the Box component</SJText>]}</ErrorVxiew>
  ));
