import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {NavigationDecorator} from '../../../../../storybook/StoryNavigator';
import {CardQuiz} from '../..'

storiesOf('molecules/CardQuiz', module)
.addDecorator((getStory) =>  getStory() )
.addDecorator(NavigationDecorator)
  .add('CardQuiz', () => (
    <CardQuiz
        card={{type:'Quiz',cardId:'',order:''}}
        contentId=""
    />
  ));
