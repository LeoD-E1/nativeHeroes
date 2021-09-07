import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containter: {
    marginTop: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sliderContainer: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
  },
  elementContainer: {
    margin: 5,
    maxHeight: 200,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 150,
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
    backgroundColor: '#22d3ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
});
