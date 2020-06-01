import 'react-native-gesture-handler';

import React from 'react';
import {Dimensions, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import CartScreen from './src/screens/CartScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import store from './src/redux/store';

EStyleSheet.build({
  //build extended stylesheet
  $primaryLight: '#BCCAEF',
  $primaryDark: '#5174F3',
  $screenWidth: Dimensions.get('window').width,
  $screenHeight: Dimensions.get('window').height,
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <Image
                style={{height: 30, width: 30, marginRight: 16}}
                source={{
                  uri:
                    'https://cdn.discordapp.com/attachments/621073689055592449/716750720115933184/logo.png',
                }}
              />
            ),
          }}>
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Summary" component={SummaryScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
