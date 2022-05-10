import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {NavigationDecorator} from '../../../../../storybook/StoryNavigator';
import {CardVideo} from '../..'

storiesOf('molecules/CardVideo', module)
.addDecorator((getStory) =>  getStory() )
.addDecorator(NavigationDecorator)
  .add('CardVideo', () => (
    <CardVideo
        card={{media:'',type:'Video',html:"<div>Hello from the CardVideo compone</div>"}}
        index={2}
    />
  ));
