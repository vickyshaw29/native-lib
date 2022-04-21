import React from 'react';
import {Button} from '../components/atoms';

const ButtonPage = () => {
  return (
    <Button
      title="Learn More"
      color="#841584"
      onPress={() => console.warn('clicked')}
    />
  );
};

export default ButtonPage;
