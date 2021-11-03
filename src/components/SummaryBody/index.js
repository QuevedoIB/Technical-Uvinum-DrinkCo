import React from 'react';
import { View, Text } from 'react-native';

import { parseCurrency } from 'src/helpers/parseCurrency';

import styles from './styles';

const SummaryBody = ({ summary }) => {
  const values = Object.values(summary);
  return values.map(({ label, qty }, index) => {
    return (
      <View
        key={`${index}${label}`}
        style={[
          styles.rowContainer,
          index === values.length - 1 && styles.totalPaymentSeparator,
        ]}>
        <Text>{label}</Text>
        <Text>{parseCurrency({ amount: qty })}</Text>
      </View>
    );
  });
};

export default SummaryBody;
