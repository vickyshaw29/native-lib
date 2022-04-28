import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../../storybook/stories/CenterView'
import React from 'react';
import {Description} from '../..';

storiesOf('atoms/Description', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Description', () => (
   <Description>
       This is description!
   </Description>
  ));
