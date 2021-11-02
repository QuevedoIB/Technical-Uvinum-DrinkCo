import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import ShadowContainer from '../ShadowContainer';

import { updateCartItem, deleteCartItem } from '../../../redux/reducers/cart';
import { parseCurrency } from '../../../helpers/parseCurrency';

import styles from './styles';

const CartCard = ({ item: { item_id, name, price, qty, image } }) => {
  const dispatch = useDispatch();
  const onIncreaseAmount = () =>
    dispatch(updateCartItem({ item_id, qty: qty + 1 }));

  const onDecreaseAmount = () => {
    if (qty > 1) {
      dispatch(updateCartItem({ item_id, qty: qty - 1 }));
    }
  };

  const onRemoveItem = () =>
    Alert.alert(
      null,
      `Are you sure you want to remove ${name} from cart?`,
      [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => dispatch(deleteCartItem({ item_id })) },
      ],
      { cancelable: false },
    );

  return (
    <View>
      <ShadowContainer style={styles.shadowContainer}>
        <View style={styles.container}>
          <ShadowContainer style={styles.shadowImage}>
            <Image
              testID={'cardImage'}
              source={{ uri: image }}
              style={styles.image}
            />
          </ShadowContainer>
          <View style={styles.descriptionContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.pricingContainer}>
              <Text style={styles.price}>
                {parseCurrency({ amount: price })}
              </Text>
              <Text style={styles.amount}>{qty}</Text>
              <View>
                <TouchableOpacity
                  testID={'increaseTouchable'}
                  onPress={onIncreaseAmount}>
                  <EntypoIcon name="chevron-small-up" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  testID={'decreaseTouchable'}
                  onPress={onDecreaseAmount}>
                  <EntypoIcon name="chevron-small-down" size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <Text testID={'subtotal'} style={styles.total}>
              Subtotal: {parseCurrency({ amount: price * qty })}
            </Text>
          </View>
        </View>
      </ShadowContainer>
      <TouchableOpacity style={styles.deleteContainer} onPress={onRemoveItem}>
        <Text style={styles.deleteIcon}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

CartCard.propTypes = {
  item: PropTypes.shape({
    item_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
  image: PropTypes.string,
  updateCartItem: PropTypes.func,
  deleteCartItem: PropTypes.func,
};

export default CartCard;
