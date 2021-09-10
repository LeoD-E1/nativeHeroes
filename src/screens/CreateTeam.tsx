import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ModalCreateTeam from '../components/ModalCreateTeam';
import {styles} from '../styles/teams.styles';
import Slider from '../components/Slider';

import {useSelector} from 'react-redux';

export default function CreateTeam({navigation}) {
  const {teams} = useSelector(state => state.teams);

  return (
    <ScrollView>
      <ModalCreateTeam navigation={navigation} />
      <View>
        {teams.lenght > 0 ? (
          teams.map((item, i) => (
            <View key={i}>
              <View>
                <Text style={styles.titleText}> Team {item.name}</Text>
                <Slider item={item.members} navigation={navigation} />
              </View>
            </View>
          ))
        ) : (
          <Text>No data about teams</Text>
        )}
      </View>
    </ScrollView>
  );
}
