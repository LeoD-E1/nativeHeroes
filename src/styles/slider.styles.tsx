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
    backgroundColor: '#fff',
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
    height: 100,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
  button: {
    backgroundColor: '#0891b2',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
});
