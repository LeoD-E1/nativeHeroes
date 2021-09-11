import React from 'react';
import {View, Text, ScrollView} from 'react-native';
//Components
import ModalCreateTeam from '../components/ModalCreateTeam';
import Slider from '../components/Slider';
import EditTeam from '../components/EditTeam';
//Styles
import {styles} from '../styles/teams.styles';
//Redux
import {useAppSelector} from '../typescript/hooks';

export default function CreateTeam({navigation}: any) {
  const {teams} = useAppSelector(state => state.teams);

  return (
    <ScrollView>
      <ModalCreateTeam />
      <View>
        {teams ? (
          teams.map((item, i) => (
            <View key={i}>
              <View>
                <View style={styles.editTitleContainer}>
                  <Text style={styles.titleText}> Team {item.name}</Text>
                  <EditTeam element={item} />
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
