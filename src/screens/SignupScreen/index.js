import React from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';

import SignupForm from '../../components/forms/SignupForm';

const SignupScreen = ({navigation}) => {
  const onSubmit = (data, bag) => {
    const {name, surnames, email, password, confirm} = data;

    //Auth signup api call with data save data/token to redux and navigate

    bag.resetForm({});
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView
        contentContainerStyle={{
          marginTop: 16,
          alignItems: 'center',
        }}>
        <SignupForm onSubmit={onSubmit} />
      </ScrollView>
    </View>
  );
};

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignupScreen;
