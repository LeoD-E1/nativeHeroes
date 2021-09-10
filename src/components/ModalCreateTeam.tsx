import React, {useState} from 'react';
import {
  Modal,
  Portal,
  Title,
  Button,
  TextInput,
  Caption,
} from 'react-native-paper';
import {styles} from '../styles/modal.styles';
import {Hero} from '../types/hero.types';
import {useSelector, useDispatch} from 'react-redux';
import {addName, saveTeam} from '../store/teamSlice';
import SearchBar from './SearchBar';
import {Image, View, ScrollView, Text} from 'react-native';

const ModalCreateTeam = ({navigation}: any) => {
  const [visible, setVisible] = useState(false);

  const {members, name} = useSelector(state => state.teams);

  const dispatch = useDispatch();

  const goods = members.filter(
    (item: Hero) => item.biography.alignment === 'good',
  );
  const bads = members.filter(
    (item: Hero) => item.biography.alignment === 'bad',
  );
  const neutral = members.filter(
    (item: Hero) => item.biography.alignment === 'neutral',
  );

  const image = (item: Hero) => (
    <View key={item.id}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.images.md}`,
        }}
      />
    </View>
  );

  const onChangeText = (e: string) => {
    dispatch(addName(e));
  };

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
          <TextInput
            mode="flat"
            label="Team Name"
            placeholder="Write a name"
            right={<TextInput.Affix text="/100" />}
            onChangeText={onChangeText}
          />

          <SearchBar screen="Modal" />

          <View style={styles.card}>
            <Title>{name}</Title>
            <Title>Goods</Title>
            <ScrollView horizontal>
              {goods ? (
                goods.map((item: Hero) => image(item))
              ) : (
                <Caption>No good hero selected!</Caption>
              )}
            </ScrollView>
            <Title>Bads</Title>
            <ScrollView horizontal>
              {bads ? (
                bads.map((item: Hero) => image(item))
              ) : (
                <Caption>No bads hero selected!</Caption>
              )}
            </ScrollView>
          </View>

          <Button
            style={styles.button}
            icon="check-circle"
            mode="contained"
            onPress={submit}>
            Create
          </Button>
        </Modal>
      </Portal>
      <Button style={styles.button} onPress={showModal}>
        <Text style={styles.textButton}>Create team</Text>
      </Button>
    </>
  );
};

export default ModalCreateTeam;
