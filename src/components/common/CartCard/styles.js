import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'space-evenly',
    width: '$screenWidth * 0.9',
  },
  image: {height: '90%', width: '90%'},
  descriptionContainer: {width: '40%'},
  name: {fontSize: 16, fontWeight: 'bold'},
  country: {fontSize: 12, fontWeight: '200'},
});

export default styles;
