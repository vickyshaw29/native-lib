import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoryBook, LandingPage} from './src/pages';
import QuizPage from './src/pages/QuizPage';

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
          name="StoryBook"
          component={StoryBook}
          options={{
            title: 'StoryBook',
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

export default App;
