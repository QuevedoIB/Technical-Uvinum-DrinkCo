import React, { useMemo, useCallback } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const QuantitySelector = ({
  selectedValue,
  handleQuantityChange,
  max = 99,
}) => {
  const options = useMemo(
    () =>
      new Array(max)
        .fill(0)
        .map((_, i) => ({ label: `${i + 1}`, value: `${i + 1}` })),
    [max],
  );

  const onArrowUp = useCallback(
    () => selectedValue < max && handleQuantityChange(selectedValue + 1),
    [handleQuantityChange, max, selectedValue],
  );

  const onArrowDown = useCallback(
    () => selectedValue > 1 && handleQuantityChange(selectedValue - 1),
    [handleQuantityChange, selectedValue],
  );

  return (
    <RNPickerSelect
      itemKey="value"
      placeholder={{}}
      value={`${selectedValue}`}
      onValueChange={handleQuantityChange}
      items={options}
      onUpArrow={onArrowUp}
      onDownArrow={onArrowDown}>
      <View style={styles.quantityContainer}>
        <EntypoIcon name="chevron-left" size={20} />
        <Text>{selectedValue}</Text>
        <EntypoIcon name="chevron-right" size={20} />
      </View>
    </RNPickerSelect>
  );
};

export default QuantitySelector;
