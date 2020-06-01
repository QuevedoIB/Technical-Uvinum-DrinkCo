import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import LoginForm from '../../components/forms/LoginForm';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const onSubmit = (data, bag) => {
    const {email, password} = data;

    //Auth login api call with data, save data/token to redux and navigate

    bag.resetForm({});
  };
  return (
    <View style={styles.container}>
      <LoginForm onSubmit={onSubmit} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
