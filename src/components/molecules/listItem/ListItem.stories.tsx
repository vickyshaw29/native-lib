import { storiesOf } from '@storybook/react-native'
import { CenterView } from '../../../../storybook/stories/CenterView'
import React from 'react'
import {CollapsableListItem} from '..'

storiesOf('molecules', module)
  .addDecorator((getStory) => <CenterView>{ getStory() }</CenterView>)
  .add('CustomList', () => (
    <CollapsableListItem title="Collapsable List Item"/>
  ))