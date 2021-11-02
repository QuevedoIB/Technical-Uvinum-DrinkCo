import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  totalPaymentSeparator: {
    borderTopWidth: 1,
    paddingTop: 6,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
});

export default styles;
