import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {NavigationDecorator} from '../../../../../storybook/StoryNavigator';
import {CardOnlyImage} from '../..'

storiesOf('molecules/CardOnlyImage', module)
.addDecorator((getStory) =>  getStory() )
.addDecorator(NavigationDecorator)
  .add('CardOnlyImage', () => (
    <CardOnlyImage
        card={{html:"<div>Hello from the CardOnlyImage component</div>",type:'Testo + immagine',media:''}}
        index={10}
    />
  ));
