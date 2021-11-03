import React from 'react';
import { FlatList, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import CheckoutService from 'src/components/../services/CheckoutService';
import CartCard from 'src/components/common/CartCard';
import Button from 'src/components/common/Button';
import Spinner from 'src/components/common/Spinner';

import { setCart } from 'src/redux/reducers/cart';

import styles from './styles';

const CartScreen = ({ navigation }) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const items = useSelector(store => store.cart.items);

  const { isLoading, error } = useQuery('fetchCart', async () => {
    const res = await CheckoutService.getCheckout();
    dispatch(setCart(res));
  });

  if (error) {
    Alert.alert(t('cart.errors.fetching'));
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <FlatList
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <CartCard item={item} />}
        keyExtractor={({ item_id }) => `${item_id}`}
      />
      <Button
        style={styles.floatingButton}
        text={t('common.confirm')}
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
  navigation: PropTypes.object.isRequired,
};

export default CartScreen;
