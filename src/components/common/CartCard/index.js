import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Swipeable } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ShadowContainer from 'src/components/common/ShadowContainer';
import DeleteButton from './DeleteButton';
import QuantitySelector from './QuantitySelector';

import { updateCartItem } from 'src/redux/reducers/cart';
import { parseCurrency } from 'src/helpers/parseCurrency';

import styles from './styles';

const CartCard = ({ item: { item_id, name, price, qty, image } }) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const renderRightActions = (progress, dragX) => {
    const opacity = dragX.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return <DeleteButton opacity={opacity} name={name} item_id={item_id} />;
  };

  const handleQuantityChange = quantity =>
    dispatch(updateCartItem({ item_id, qty: +quantity }));

  return (
    <Swipeable
      containerStyle={styles.swipeableContainer}
      renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <ShadowContainer style={styles.shadowImage}>
          <Image
            testID={'cardImage'}
            source={{ uri: image }}
            style={styles.image}
          />
        </ShadowContainer>
        <View style={styles.descriptionContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.price}>{parseCurrency({ amount: price })}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.pricingContainer}>
            <Text>{t('cart.labels.quantity')} </Text>
            <QuantitySelector
              selectedValue={qty}
              handleQuantityChange={handleQuantityChange}
            />
          </View>
          <Text testID={'subtotal'} style={styles.total}>
            {t('cart.labels.subtotal')} {parseCurrency({ amount: price * qty })}
          </Text>
        </View>
      </View>
    </Swipeable>
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
};

export default CartCard;
