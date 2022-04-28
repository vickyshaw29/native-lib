import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {AppBar} from '..'

storiesOf('molecules/AppBar', module)
  .addDecorator(getStory => getStory())
  .add('AppBar', () => (
   <AppBar title="AppBar"/>
  ));
