import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {CenterView} from '../../../../storybook/stories/CenterView';
import {SimpleHeader} from '..';

storiesOf('molecules/SimpleHeader', module)
  .addDecorator(getStory => getStory())
  .add('SimpleHeader', () => <SimpleHeader />);
