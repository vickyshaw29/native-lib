import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomList from '../../molecules/list/CustomList';

const components = ['Quiz'];
const Dashboard = () => {
  type Nav = {
    navigate: (value: string) => void;
  };
  const {navigate} = useNavigation<Nav>();
  return <CustomList data={components} isNavigate={true} navigate={navigate} />;
};

export default Dashboard;
