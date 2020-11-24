import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CONSTANTS} from './constants';

import LoginScreen from './screens/LoginScreen';

const LoginScreens: React.FC = () => {
  const LoginStack = createStackNavigator();

  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

const Navigation: React.FC = () => {
  const RootStack = createStackNavigator();

  const myTheme: Theme = {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      background: CONSTANTS.backgroundColor,
      primary: CONSTANTS.primaryColor,
      //   background: CONSTANTS.backgroundColor,
      text: CONSTANTS.whiteColor,
    },
  };

  return (
    <NavigationContainer theme={myTheme}>
      <RootStack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <RootStack.Screen name="LoginScreens" component={LoginScreens} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
