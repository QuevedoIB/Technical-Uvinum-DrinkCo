import 'react-native-gesture-handler';

import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import EStyleSheet from 'react-native-extended-stylesheet';

import Logo from './src/components/common/Logo';
import CartScreen from './src/screens/CartScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import { store } from './src/redux/store';

import './i18n';

EStyleSheet.build({
  $primaryLight: '#D4E4BC',
  $primaryDark: '#96ACB7',
  $screenWidth: Dimensions.get('window').width,
  $screenHeight: Dimensions.get('window').height,
});

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerRight: () => <Logo />,
            }}>
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Summary" component={SummaryScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
