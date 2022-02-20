import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 30 }}>Profile</Text>
      </View>
    </Background>
  );
}
export const profileRouteOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ color }) => <Icon name="person" size={20} color={color} />,
};
