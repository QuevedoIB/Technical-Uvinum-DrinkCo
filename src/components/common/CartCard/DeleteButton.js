import React from 'react';
import { Animated, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { deleteCartItem } from 'src/redux/reducers/cart';

import styles from './styles';

const DeleteButton = ({ opacity, name, item_id }) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const onRemoveItem = () =>
    Alert.alert(
      null,
      t('cart.deleteConfirmation', { item: name }),
      [
        {
          text: t('common.no'),
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: t('common.yes'),
          onPress: () => dispatch(deleteCartItem({ item_id })),
        },
      ],
      { cancelable: false },
    );

  return (
    <Animated.View style={{ opacity }}>
      <TouchableOpacity style={styles.deleteIcon} onPress={onRemoveItem}>
        <EntypoIcon name="trash" size={40} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default DeleteButton;
