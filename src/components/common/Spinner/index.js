import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

const Spinner = ({ fullScreen = true, size = 'large', customColor }) => {
  const color = customColor || EStyleSheet.value('$primaryDark');
  return (
    <View style={fullScreen ? styles.container : {}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Spinner;
