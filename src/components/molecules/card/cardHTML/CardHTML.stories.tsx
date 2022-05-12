import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {NavigationDecorator} from '../../../../../storybook/StoryNavigator';
import {CardHTML} from '../..'

storiesOf('molecules', module)
.addDecorator((getStory) =>  getStory() )
.addDecorator(NavigationDecorator)
  .add('CardHTML', () => (
    <CardHTML
        card={{cardId:'',html:"<div>Hello from the CardHTML component</div>",order:1,type:'Testo'}}
        index={10}
    />
  ));
