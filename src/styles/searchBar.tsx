import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 16,
    backgroundColor: '#EBEBED',
    borderRadius: 20,
  },
  inputContainer: {
    marginHorizontal: 10,
    height: 50,
  },
  listContainer: {
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#EBEBED',
    maxHeight: 250,
    marginTop: 5,
  },
  results: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    fontWeight: 'bold',
    alignItems: 'flex-end',
    marginHorizontal: 5,
    marginRight: 20,
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
  noResult: {
    padding: 10,
    fontWeight: 'bold',
  },
  alignmentGood: {
    backgroundColor: 'green',
    marginHorizontal: 5,
    marginRight: 45,
    padding: 5,
    borderRadius: 5,
  },
  alignmentBad: {
    backgroundColor: 'red',
    marginHorizontal: 5,
    marginRight: 45,
    padding: 5,
    borderRadius: 5,
  },
});
