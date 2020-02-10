import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ActionCreators from '../actions';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> What's up </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
