import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LoginForm from '../../components/forms/LoginForm';
import AuthService from '../../services/AuthService';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const onSubmit = async (data, bag) => {
    try {
      //Auth login api call with data
      const user = await AuthService.logIn(data);
      // set token in axios / save user in redux

      bag.resetForm({});

      //navigate
    } catch (error) {}
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
