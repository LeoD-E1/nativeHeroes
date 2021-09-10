import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    borderRadius: 10,
    color: '#666',
    paddingHorizontal: 10,
  },
  containerModal: {
    alignSelf: 'center',
    width: '85%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  imageTextContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#EBEBED',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 140,
    alignSelf: 'flex-start',
  },
  nameTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#666',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  aliasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginHorizontal: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
});
