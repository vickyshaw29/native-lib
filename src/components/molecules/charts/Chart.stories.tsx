import {storiesOf} from '@storybook/react-native';
import React from 'react';
import { CenterView } from '../../../../storybook/stories/CenterView';
import {ChartProgress} from '..';

storiesOf('molecules', module)
.addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('Chart', () => <ChartProgress percentage={30} />);
