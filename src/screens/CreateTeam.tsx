import React from 'react';
import {View, Text} from 'react-native';
import ModalCreateTeam from '../components/ModalCreateTeam';

export default function CreateTeam({navigation}) {
  return (
    <View>
      <ModalCreateTeam navigation={navigation} />
    </View>
  );
}
