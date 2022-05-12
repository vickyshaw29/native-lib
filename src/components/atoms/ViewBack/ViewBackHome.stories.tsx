import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import { ViewBackHome } from '..';
import SJText from '../typography/SJText';
import {NavigationDecorator} from '../../../../storybook/StoryNavigator';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(NavigationDecorator)
  .add('ViewBackHome', () => (
    <ViewBackHome/>
  ));
