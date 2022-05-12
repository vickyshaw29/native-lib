import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import CustomList from './CustomList'

storiesOf('molecules', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('CustomList', () => (
    <CustomList data={['First','Second']} isNavigate={false}/>
  ))