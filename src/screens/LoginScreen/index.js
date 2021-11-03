import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'kutaisan-react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from 'src/components/forms/LoginForm';

import AuthService from 'src/services/AuthService';
import { setUser } from 'src/redux/reducers/user';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    async (data, bag) => {
      try {
        //Auth login api call with data
        const { email } = await AuthService.logIn(data);
        // set token in axios / save user in redux
        dispatch(setUser(email));

        bag.resetForm({});

        //navigate
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, navigation],
  );

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <LoginForm onSubmit={onSubmit} />
    </KeyboardAwareScrollView>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
