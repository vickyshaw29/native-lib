import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingPage} from './src/pages';
import QuizPage from './src/pages/QuizPage';
import Storybook from './storybook';

//if true stories will be visible;
let LOAD_STORYBOOk = false;
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Stack.Screen
          name="Dashboard"
          component={LandingPage}
          options={{
            title: 'Dashboard',
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizPage}
          options={{
            title: 'Quiz',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LOAD_STORYBOOk === true ? Storybook : App;
