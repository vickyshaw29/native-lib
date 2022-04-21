import React, {useState} from 'react';
import {Input} from '../components/atoms';

const InputPage = () => {
  const [value, setValue] = useState('');
  return (
    <Input value={value} onChange={event => setValue(event.nativeEvent.text)} />
  );
};

export default InputPage;
