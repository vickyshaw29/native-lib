import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import ButtonRound from './ButtonRound';

storiesOf('atoms/ButtonRound', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('ButtonRound', () => (
    <ButtonRound
      disabled={false}
      small={true}
      isLoading={false}
      iconName={"comments"}
      style={{color: 'red'}}
      onPress={() => console.warn('clicked')}
    />
  ));
