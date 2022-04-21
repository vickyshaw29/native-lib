import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InputPage, LandingPage,TextPage,ButtonPage } from './src/pages';

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
            name="Input"
            component={InputPage}
            options={{
              title: 'Input',
            }}
          />
           <Stack.Screen
            name="Button"
            component={ButtonPage}
            options={{
              title: 'Button',
            }}
          />
           <Stack.Screen
            name="Text"
            component={TextPage}
            options={{
              title: 'Text',
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
