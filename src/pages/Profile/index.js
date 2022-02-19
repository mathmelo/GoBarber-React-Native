import React from 'react';
import { Text, View } from 'react-native';

import Background from '~/components/Background';

// import { Container } from './styles';

function Profile() {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 30 }}>Profile</Text>
      </View>
    </Background>
  );
}

export default Profile;
