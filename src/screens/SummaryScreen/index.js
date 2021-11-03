import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SummaryBody from 'src/components/SummaryBody';
import Button from 'src/components/common/Button';
import ShadowContainer from 'src/components/common/ShadowContainer';

import CheckoutService from 'src/services/CheckoutService';

import styles from './styles';

const SummaryScreen = ({ navigation }) => {
  const [t] = useTranslation();
  const items = useSelector(store => store.cart.items);
  const user = useSelector(store => store.user.user);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const amountWithoutIVA = items.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0,
    );

    const transport = amountWithoutIVA >= 30 ? 0 : 5.95;

    setSummary({
      amountWithoutIVA: {
        qty: amountWithoutIVA.toFixed(2),
        label: t('summary.labels.totalWithoutTaxes'),
      },
      transport: {
        qty: transport,
        label: t('summary.labels.totalTransport'),
      },
      taxes: {
        qty: (amountWithoutIVA * 0.2).toFixed(2),
        label: t('summary.labels.taxes'),
      },
      total: {
        qty: (amountWithoutIVA * 1.2 + transport).toFixed(2),
        label: t('summary.labels.total'),
      },
    });
  }, [items, t]);

  const onConfirm = async () => {
    try {
      //api call to send checkout and proceed with payments flow
      await CheckoutService.saveCheckout(JSON.stringify({ items }));
      //reset cart items and navigate
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ShadowContainer style={styles.summaryCard}>
        <SummaryBody summary={summary} />
        <View style={styles.confirmContainer}>
          <Button
            style={styles.checkoutButton}
            text={t('common.confirm')}
            onPress={onConfirm}
            disabled={!user}
          />
          {!user && (
            <>
              <View style={styles.rowContainer}>
                <Text>{t('summary.loginReminderHead')} </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.link}>
                    {t('summary.login').toLowerCase()}{' '}
                  </Text>
                </TouchableOpacity>
                <Text>{t('summary.loginReminderEnding')}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text>{t('summary.signupReminder')} </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.link}>{t('summary.signup')}</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
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

export default SummaryScreen;
