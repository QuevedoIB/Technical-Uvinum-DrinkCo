import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({text, onPress, style}) => {
  return (
    <TouchableOpacity
      testID={'buttonTouchable'}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
