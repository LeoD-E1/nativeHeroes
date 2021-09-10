import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderBottomColor: '#999',
    borderBottomWidth: 0.5,
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 50,
  },
  listContainer: {
    borderRadius: 20,
    backgroundColor: '#fff',
    maxHeight: 250,
    marginTop: 5,
  },
  results: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 2,
  },
  item: {
    zIndex: 99,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 16,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  alignmentNeutral: {
    backgroundColor: 'gray',
    marginHorizontal: 5,
    marginRight: 45,
    padding: 5,
    borderRadius: 5,
  },

  alignmentGood: {
    backgroundColor: 'green',
    marginHorizontal: 5,
    marginRight: 35,
    padding: 5,
    borderRadius: 5,
  },
  alignmentBad: {
    backgroundColor: 'red',
    marginHorizontal: 5,
    marginRight: 35,
    padding: 5,
    borderRadius: 5,
  },
});
