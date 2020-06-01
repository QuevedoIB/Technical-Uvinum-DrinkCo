import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
  },
});

export default styles;
