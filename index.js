/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './src/app/containers/Home';
import CartScreen from './src/app/containers/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {name as appName} from './app.json';
import store from './src/config/store';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (      
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
