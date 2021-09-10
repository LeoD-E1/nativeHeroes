import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ModalCreateTeam from '../components/ModalCreateTeam';
import {styles} from '../styles/teams.styles';
import Slider from '../components/Slider';

import {useSelector} from 'react-redux';

export default function CreateTeam({navigation}: any) {
  const {teams} = useSelector(state => state.teams);

  return (
    <ScrollView>
      <ModalCreateTeam navigation={navigation} />
      <View>
        {teams ? (
          teams.map((item, i) => (
            <View key={i}>
              <View>
                <View>
                  <Text style={styles.titleText}> Team {item.name}</Text>
                </View>
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
