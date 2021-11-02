import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const Logo = ({
  src = 'https://cdn.discordapp.com/attachments/621073689055592449/716750720115933184/logo.png',
}) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: src,
      }}
    />
  );
};

export default Logo;
