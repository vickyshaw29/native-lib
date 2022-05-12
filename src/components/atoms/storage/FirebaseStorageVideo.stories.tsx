import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import {FirebaseStorageVideo} from '..'

storiesOf('atoms', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('FirebaseStorageVideo', () => (
      <FirebaseStorageVideo path="" />
  ))