import React from 'react';
import {FlatList} from 'react-native';
import {styles} from '../styles/searchBar';

import Element from './Element';
import ModalList from './ModalList';

const HeroList = ({hero, screen, navigation}: any) => {
  const searchList = ({item}: any) => (
    <Element item={item} navigation={navigation} />
  );

  const modalSelect = ({item}: any) => (
    <ModalList item={item} navigation={navigation} />
  );

  return (
    <FlatList
      style={styles.listContainer}
      data={hero}
      keyExtractor={index => index.id}
      renderItem={screen === 'Search' ? searchList : modalSelect}
    />
  );
};

export default HeroList;
