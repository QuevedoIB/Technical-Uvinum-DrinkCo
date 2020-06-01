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
  amount: {fontSize: 14, marginRight: 2, marginLeft: 14},
  total: {alignSelf: 'flex-end'},
  deleteContainer: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    right: 6,
    top: 6,
    elevation: 10,
    zIndex: 10,
  },
  deleteIcon: {color: 'white'},
  shadowImage: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowContainer: {margin: 16, overflow: 'visible'},
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  detailsContainer: {width: '30%', flexDirection: 'column'},
});

export default styles;
