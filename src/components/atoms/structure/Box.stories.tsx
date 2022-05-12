import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../../../../storybook/stories/CenterView';
import React from 'react';
import {Box,SJText} from '..';

storiesOf('atoms', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Box', () => (
    <Box>
        <SJText>
            Hello from the Box component
        </SJText>
    </Box>
  ));
