import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import Button from './Button'

storiesOf('atoms', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('Button', () => (
    <Button textStyle={{color:'red'}}>
      Confirm
    </Button>
  ))