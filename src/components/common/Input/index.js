import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

const Input = ({
  placeholder,
  name,
  onChange,
  onTouch,
  error,
  value,
  style,
  ...rest
}) => {
  const errorCheck = () => {
    if (error) {
      return <Text style={styles.error}>{error}</Text>;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          autoCapitalize="none"
          onChangeText={text => onChange(name, text)}
          onBlur={() => onTouch(name)}
          placeholderTextColor={EStyleSheet.value('$primaryDark')}
          {...rest}
        />
      </View>
      {errorCheck()}
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onTouch: PropTypes.func.isRequired,
  error: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
};

export default Input;
