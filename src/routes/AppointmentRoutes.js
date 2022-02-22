import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectProvider, {
  selectProviderOptions,
} from '~/pages/New/SelectProvider';
import SelectDateTime, {
  selectDateTimeOptions,
} from '~/pages/New/SelectDateTime';
import Confirm, { confirmOptions } from '~/pages/New/Confirm';

const Stack = createNativeStackNavigator();

export default function ApointmentRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={selectProviderOptions}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={selectDateTimeOptions}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={confirmOptions}
      />
    </Stack.Navigator>
  );
}

export const apointmentRoutesOptions = {
  tabBarLabel: 'Agendar',
  tabBarIcon: ({ color }) => (
    <Icon name="add-circle-outline" size={20} color={color} />
  ),
  tabBarStyle: {
    height: 0,
  },
  unmountOnBlur: true,
};
