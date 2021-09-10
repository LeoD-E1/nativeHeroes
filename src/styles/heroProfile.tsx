import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
  },
  description: {
    padding: 30,
    height: 300,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
  },
  headerDescription: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
  },
  about: {},
});
