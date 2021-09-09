import React from 'react';
import {
  Modal,
  Portal,
  Text,
  Button,
  TextInput,
  Avatar,
  Subheading,
} from 'react-native-paper';
import {styles} from '../styles/modal.styles';
import {useSelector} from 'react-redux';

const ModalCreateTeam = () => {
  const [visible, setVisible] = React.useState(false);
  const {heroes} = useSelector(state => state.heroes);

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
            placeholder="Write a name "
            right={<TextInput.Affix text="/100" />}
          />
          <Subheading>Goods</Subheading>

          <Subheading>Bads</Subheading>
        </Modal>
      </Portal>
      <Button style={styles.button} onPress={showModal}>
        Create Team
      </Button>
    </>
  );
};

export default ModalCreateTeam;
