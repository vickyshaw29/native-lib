import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Card} from '..'
import { CenterView } from '../../../../storybook/stories/CenterView';
import { SJText } from '../../atoms';

storiesOf('molecules/Card', module)
.addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('Card', () => (
   <Card>
       <SJText>This is card component</SJText>
   </Card>
  ));
