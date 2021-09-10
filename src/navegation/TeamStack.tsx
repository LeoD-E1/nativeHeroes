import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import CreateTeam from '../screens/CreateTeam';
import TeamDetail from '../screens/TeamDetail';

export default function TeamStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateTeam"
        component={CreateTeam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TeamDetail"
        component={TeamDetail}
        //options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
