/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/app/containers/App';
import {name as appName} from './app.json';
import store from './src/config/store';

class App extends Component {
  render() {
    return (      
    <Provider store={store}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
