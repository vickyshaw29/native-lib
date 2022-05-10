import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import {FirebaseStorageImage} from '..'

storiesOf('atoms/FirebaseStorageImage', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('FirebaseStorageImage', () => (
      <FirebaseStorageImage path="https://www.google.com"/>
  ))