import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: '#0891b2',
    alignSelf: 'flex-end',
  },
  textButton: {
    color: 'white',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  containerImage: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 65,
    margin: 3,
  },
  card: {
    backgroundColor: '#EBEBED',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 0,
  },
});
