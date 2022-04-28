import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {CenterView} from '../../../../storybook/stories/CenterView';
import {InterestAnalytic} from '..';

storiesOf('molecules/InterestAnalytic', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('InterestAnalytic', () => <InterestAnalytic />);
