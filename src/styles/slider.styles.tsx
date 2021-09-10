import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containter: {
    marginTop: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sliderContainer: {
    borderRadius: 10,
    backgroundColor: '#EBEBED',
  },
  elementContainer: {
    margin: 5,
    maxHeight: 210,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
});
