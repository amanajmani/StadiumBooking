import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Chip, Card } from 'react-native-paper';

import ActionCreators from '../actions';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> What's up </Text>
        <Chip icon="information" mode="outlined" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
