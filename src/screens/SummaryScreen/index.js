import React, {useEffect, useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import styles from '../SummaryScreen/styles';

import checkoutService from '../../services/checkoutService';
import Button from '../../components/common/Button';
import ShadowContainer from '../../components/common/ShadowContainer';

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
      amountWithoutIVA: {
        qty: amountWithoutIVA.toFixed(2),
        label: 'Total without IVA: ',
      },
      transport: {qty: transport, label: 'Total envío: '},
      taxes: {qty: (amountWithoutIVA * 0.2).toFixed(2), label: 'Taxes: '},
      total: {
        qty: (amountWithoutIVA * 1.2 + transport).toFixed(2),
        label: 'Total a pagar: ',
      },
    });
  }, []);

  const onConfirm = async () => {
    //api call to send checkout and proceed with payments flow
    const response = await checkoutService.sendCheckout(
      JSON.stringify({items}),
    );
  };

  const renderSummaryContent = () => {
    const stateValues = Object.values(state);
    return stateValues.map(({label, qty}, index) => {
      return (
        <View
          style={[
            styles.rowContainer,
            {justifyContent: 'space-between'},
            index === stateValues.length - 1 && styles.totalPaymentSeparator,
          ]}>
          <Text>{label}</Text>
          <Text>{qty}€</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ShadowContainer style={styles.summaryCard}>
        {renderSummaryContent()}
        <View style={styles.confirmContainer}>
          <Button
            style={styles.disabledButton}
            text={'Confirm'}
            onPress={onConfirm}
            disabled
          />
          <View style={styles.rowContainer}>
            <Text>Debes </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>iniciar sesión</Text>
            </TouchableOpacity>
            <Text> para realizar el pedido</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>¿No estás registrado? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.link}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ShadowContainer>
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
