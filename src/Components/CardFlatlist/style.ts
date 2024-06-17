import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerInfo: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },

  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    width: '45%',
  },

  imagemBeast: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  titleFavorite: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },

  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

