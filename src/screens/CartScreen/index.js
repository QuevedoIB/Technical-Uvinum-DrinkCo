import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/cart';

import checkoutService from '../../components/../services/checkoutService';
import CartCard from '../../components/common/CartCard';
import Button from '../../components/common/Button';

const CartScreen = ({cart: {items}, navigation, replaceCart}) => {
  useEffect(() => {
    loadItemsToRedux();
  }, []);

  const loadItemsToRedux = async () => {
    const {
      data: {data},
    } = await checkoutService.getCheckout();

    replaceCart(data);
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={({item_id}) => `${item_id}`}
      />
      <Button
        style={{position: 'absolute', bottom: 24, alignSelf: 'center'}}
        text={'Confirm'}
        onPress={() => navigation.navigate('Summary')}
      />
    </>
  );
};

CartScreen.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        item_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
      }),
    ),
  }),
  replaceCart: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = ({cart}) => ({
  cart,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);
