import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';

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
    <ShadowContainer style={{margin: 16, overflow: 'visible'}}>
      <View style={styles.container}>
        <ShadowContainer
          style={{
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            testID={'cardImage'}
            source={{uri: image}}
            style={styles.image}
          />
        </ShadowContainer>
        <View style={styles.descriptionContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.price}>{price}€</Text>
        <Text style={styles.amount}>{qty}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            testID={'increaseTouchable'}
            onPress={onIncreaseAmount}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID={'decreaseTouchable'}
            onPress={onDecreaseAmount}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text testID={'subtotal'} style={styles.amount}>
        Subtotal: {price * qty}€
      </Text>
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
          backgroundColor: 'red',
          borderRadius: 50,
          alignItems: 'center',
          position: 'absolute',
          right: -10,
          top: -10,
        }}
        onPress={onRemoveItem}>
        <Text style={{color: 'white'}}>X</Text>
      </TouchableOpacity>
    </ShadowContainer>
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
