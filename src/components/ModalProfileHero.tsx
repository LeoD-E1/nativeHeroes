import * as React from 'react';
import {Modal, Portal} from 'react-native-paper';
import {Text, Image, View} from 'react-native';
import {styles} from '../styles/ModalProfile.styles';
import Appearance from './heroProfile/Appearance';

const ModalProfileHero = ({item}: any) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerModal}>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `${item.images.lg}`,
              }}
            />
            <View>
              <Text style={styles.nameTitle}>{item.biography.fullName} </Text>
              <Text style={styles.aliasTitle}>{item.biography.aliases[0]}</Text>
              <Appearance item={item.appearance} />
            </View>
          </View>
        </Modal>
      </Portal>
      <Text style={styles.name} onPress={showModal}>
        {item.biography.fullName}
      </Text>
    </>
  );
};

export default ModalProfileHero;
