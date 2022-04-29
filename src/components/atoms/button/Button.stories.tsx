import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import Button from './Button'

storiesOf('atoms/Button', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('confirm', () => (
    <Button textStyle={{color:'red'}}>
      Confirm
    </Button>
  ))