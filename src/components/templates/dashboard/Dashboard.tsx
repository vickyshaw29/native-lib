import React from 'react';
import CustomList from '../../molecules/list/CustomList';

const components = ['Quiz'];
const Dashboard = () => {
  return <CustomList data={components} isNavigate={true} />;
};

export default Dashboard;
