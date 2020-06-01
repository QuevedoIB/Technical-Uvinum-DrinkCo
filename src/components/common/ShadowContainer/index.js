import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from '../ShadowContainer/styles';

const ShadowContainer = ({children, style}) => {
  return (
    <View testID={'shadowContainer'} style={[styles.shadow, style]}>
      {children}
    </View>
  );
};

ShadowContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
};

export default ShadowContainer;
