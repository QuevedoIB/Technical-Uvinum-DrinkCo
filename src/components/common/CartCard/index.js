import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/cart';

import styles from './styles';
import ShadowContainer from '../ShadowContainer';

const CartCard = ({
  item: {item_id, name, price, qty},
  image,
  updateCartItem,
  deleteCartItem,
}) => {
  const onIncreaseAmount = () => updateCartItem({item_id, qty: qty + 1});

  const onDecreaseAmount = () => {
    if (qty > 1) {
      updateCartItem({item_id, qty: qty - 1});
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
        {text: 'Yes', onPress: () => deleteCartItem({item_id})},
      ],
      {cancelable: false},
    );

  return (
    <View>
      <ShadowContainer style={styles.shadowContainer}>
        <View style={styles.container}>
          <ShadowContainer style={styles.shadowImage}>
            <Image
              testID={'cardImage'}
              source={{uri: image}}
              style={styles.image}
            />
          </ShadowContainer>
          <View style={styles.descriptionContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.pricingContainer}>
              <Text style={styles.price}>{price}€</Text>
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
              Subtotal: {price * qty}€
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
  }),
  image: PropTypes.string,
  updateCartItem: PropTypes.func,
  deleteCartItem: PropTypes.func,
};

CartCard.defaultProps = {
  image:
    'https://cdn.discordapp.com/attachments/621073689055592449/716749482561241139/vino.png',
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartCard);
