import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  summaryCard: {
    height: '$screenHeight * 0.6',
    width: '$screenWidth * 0.8',
    borderRadius: 12,
    padding: 16,
  },
  link: {
    textDecorationLine: 'underline',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  checkoutButton: {
    marginBottom: 16,
  },
  confirmContainer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default styles;
