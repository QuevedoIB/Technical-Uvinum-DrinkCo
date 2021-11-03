import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'kutaisan-react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import SignupForm from 'src/components/forms/SignupForm';

import AuthService from 'src/services/AuthService';
import { setUser } from 'src/redux/reducers/user';

import styles from './styles';

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    async (data, bag) => {
      try {
        //Auth signup api call with data save data/token to redux and navigate
        const { email } = await AuthService.signUp(data);

        dispatch(setUser(email));

        bag.resetForm({});

        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, navigation],
  );

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <SignupForm onSubmit={onSubmit} />
    </KeyboardAwareScrollView>
  );
};

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignupScreen;
