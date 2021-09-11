import React, {useState} from 'react';
import {Modal, Portal, Title, Button} from 'react-native-paper';
import {Image, View, ScrollView, Text, Pressable} from 'react-native';
import {styles} from '../styles/modal.styles';
import {Hero} from '../typescript/types/hero.types';
import {useSelector, useDispatch} from 'react-redux';
import {addName, saveTeam, deleteMemberTeam} from '../store/teamSlice';
import SearchBar from './SearchBar';

export default function EditTeam({element}: any) {
  const {members, name} = useSelector(state => state.teams);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const image = hero => (
    <Pressable
      key={hero.id}
      onPress={() => dispatch(deleteMemberTeam(hero.id))}>
      <Image
        style={styles.image}
        source={{
          uri: `${hero.images.md}`,
        }}
      />
    </Pressable>
  );

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const submit = () => {
    dispatch(saveTeam({members, name}));
    hideModal();
  };

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          <View style={styles.card}>
            <Title>Heroes</Title>
            <ScrollView horizontal>
              {element.members.map((hero: Hero) => image(hero))}
            </ScrollView>
          </View>

          <SearchBar screen="Modal" />

          <Button
            style={styles.button}
            icon="check-circle"
            mode="contained"
            onPress={submit}>
            edit
          </Button>
        </Modal>
      </Portal>
      <Button style={styles.button} onPress={showModal}>
        <Text style={styles.textButton}>Edit </Text>
      </Button>
    </>
  );
}
