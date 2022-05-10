import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import {CardNum} from '..'

storiesOf('atoms/CardNum', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('CardNum', () => (
    <CardNum index={3} size={400} style={{backgroundColor:"gray"}}/>
  ))