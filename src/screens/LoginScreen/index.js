import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import LoginForm from '../../components/forms/LoginForm';

const LoginScreen = ({navigation}) => {
  const onSubmit = (data, bag) => {
    const {email, password} = data;

    //Auth login api call with data, save data/token to redux and navigate

    bag.resetForm({});
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <LoginForm onSubmit={onSubmit} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
