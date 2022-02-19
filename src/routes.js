import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PropTypes from 'prop-types';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import DashboardStyles from './pages/Dashboard/navigationOptions';

import Profile from './pages/Profile';
import ProfileStyles from './pages/Profile/navigationOptions';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Routes({ signedIn }) {
  return (
    <NavigationContainer>
      {!signedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <BottomTab.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            tabBarStyle: {
              backgroundColor: '#8d41a8',
              borderTopWidth: 0,
            },
            tabBarHideOnKeyboard: true,
          }}
        >
          <BottomTab.Screen
            name="Dashboard"
            component={Dashboard}
            options={DashboardStyles}
          />
          <BottomTab.Screen
            name="Profile"
            component={Profile}
            options={ProfileStyles}
          />
        </BottomTab.Navigator>
      )}
    </NavigationContainer>
  );
}

Routes.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};
