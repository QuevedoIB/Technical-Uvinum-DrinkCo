import React, {useEffect, useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import styles from '../SummaryScreen/styles';

import checkoutService from '../../services/checkoutService';
import Button from '../../components/common/Button';

const SummaryScreen = ({cart: {items}, navigation}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({...oldState, ...newState}),
    {},
  );

  useEffect(() => {
    const amountWithoutIVA = items.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0,
    );

    const transport = amountWithoutIVA >= 30 ? 0 : 5.95;

    setState({
      amountWithoutIVA: amountWithoutIVA.toFixed(2),
      transport,
      taxes: (amountWithoutIVA * 0.2).toFixed(2),
      total: (amountWithoutIVA * 1.2 + transport).toFixed(2),
    });
  }, []);

  const onConfirm = async () => {
    //api call to send checkout and proceed with payments flow
    const response = await checkoutService.sendCheckout(
      JSON.stringify({items}),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.summaryCard}>
        <Text>Total without IVA: {state.amountWithoutIVA}€</Text>
        <Text>
          Total envío:{' '}
          {state.transport ? `${state.transport}€` : 'Envío gratuito'}
        </Text>
        <Text>Taxes: {state.taxes}€</Text>
        <Text>Total a pagar: {state.total}€</Text>
        <Button text={'Confirm'} onPress={onConfirm} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>¿No estás registrado?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text> Regístrate</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text> Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SummaryScreen.propTypes = {
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

const mapStateToProps = ({cart}) => ({
  cart,
});

export default connect(mapStateToProps)(SummaryScreen);
