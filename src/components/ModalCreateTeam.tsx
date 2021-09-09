import React from 'react';
import {
  Modal,
  Portal,
  Text,
  Button,
  TextInput,
  Subheading,
} from 'react-native-paper';
import {styles} from '../styles/modal.styles';
import {Hero} from '../types/hero.types';
import {useSelector} from 'react-redux';
import SearchBar from './SearchBar';
import {Image, View, ScrollView} from 'react-native';

const ModalCreateTeam = ({navigation}: any) => {
  const [visible, setVisible] = React.useState(false);
  const {members} = useSelector(state => state.teams);

  const goods = members.filter(
    (item: Hero) => item.biography.alignment === 'good',
  );

  const bads = members.filter(
    (item: Hero) => item.biography.alignment === 'bad',
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

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}>
          <TextInput
            mode="outlined"
            label="Team Name"
            placeholder="Write a name"
            right={<TextInput.Affix text="/100" />}
          />
          <SearchBar screen="Modal" />
          <Subheading>Goods</Subheading>
          <ScrollView horizontal>
            {goods.map((item: Hero) => image(item))}
          </ScrollView>
          <Subheading>Bads</Subheading>
          <ScrollView horizontal>
            {bads.map((item: Hero) => image(item))}
          </ScrollView>
        </Modal>
      </Portal>
      <Button style={styles.button} onPress={showModal}>
        Create Team
      </Button>
    </>
  );
};

export default ModalCreateTeam;
