import React from 'react';
import {Image, Text, Pressable, View} from 'react-native';
import {styles} from '../styles/searchBar';
import {useAppDispatch} from '../typescript/hooks';
import {addMembers} from '../store/teamSlice';

const ModalList = ({item}: any) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      key={item.id}
      style={styles.results}
      onPress={() => dispatch(addMembers(item))}>
      {item.biography.alignment === 'good' ? (
        <View style={styles.alignmentGood} />
      ) : (
        <View style={styles.alignmentBad} />
      )}
      <Image
        style={styles.image}
        source={{
          uri: `${item.images.md}`,
        }}
      />
      <Text style={styles.item}>{item.biography.aliases[0]}</Text>
    </Pressable>
  );
};

export default ModalList;
