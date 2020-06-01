import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  summaryCard: {
    height: '$screenHeight * 0.6',
    width: '$screenWidth * 0.8',
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 16,
  },
});

export default styles;
