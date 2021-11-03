import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  swipeableContainer: { borderBottomWidth: 1 },
  container: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  image: { height: '90%', width: '90%' },
  descriptionContainer: { width: '40%' },
  name: { fontSize: 16, fontWeight: 'bold' },
  amount: { fontSize: 14, marginRight: 2, marginLeft: 14 },
  total: { alignSelf: 'flex-end' },
  deleteIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: 'salmon',
  },
  shadowImage: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowContainer: { margin: 16, overflow: 'visible' },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: { width: '30%', flexDirection: 'column' },
});

export default styles;
