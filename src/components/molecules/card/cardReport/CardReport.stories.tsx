import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {NavigationDecorator} from '../../../../../storybook/StoryNavigator';
import {CardReport} from '../..'

storiesOf('molecules/CardReport', module)
.addDecorator((getStory) =>  getStory() )
.addDecorator(NavigationDecorator)
  .add('CardReport', () => (
    <CardReport
        card={{type:'Quiz',cardId:'',order:''}}
        index={10}
        learningContent={"<div>Hello from here !</div>"}
    />
  ));
