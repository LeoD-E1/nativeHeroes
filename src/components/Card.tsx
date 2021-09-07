import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../styles/card.styles';

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.metaContainer}>
          <View>
            <Text style={styles.timings}>Today @ 9PM</Text>
            <Text style={styles.description}>Let's talk about avatar!</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Remind me</Text>
          </Pressable>
        </View>
        <Image
          source={{
            uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
          }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}
