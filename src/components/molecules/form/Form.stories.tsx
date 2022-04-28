import {storiesOf} from '@storybook/react-native';
import React from 'react';
import { CenterView } from '../../../../storybook/stories/CenterView';
import {Form} from '..';

storiesOf('molecules/Form', module)
.addDecorator((getStory) => getStory())
  .add('Form', () => <Form placeholder="Form"/>);
