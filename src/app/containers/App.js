
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Chip, Card } from 'react-native-paper';

import ActionCreators from '../actions';

const court = ['court 1', 'court 2', 'court 3', 'court 4', 'court 5'];

const timeDetails = ['06:00 AM', '07:00 AM', '08:00 AM',
'09:00 AM','10:00 AM','11:00 AM','12:00 PM',
'01:00 PM','02:00 PM','03:00 PM','04:00 PM'];

function App(props) {
  const [isSelected, setIsSelected] = useState({});
  const [cartData, setCartData] = useState([]);

  const toggle = (time, court) => {
    const key = time + court;
    if (isSelected[key]) {
      setIsSelected(prevState => ({ ...prevState, [key]: false}));
      setCartData(cartData.filter(item => item.key !== key))
    } else {
      setIsSelected(prevState => ({ ...prevState, [key]: true}));
      setCartData(prevState => [...prevState, {key, time, court}]);
    }
  }

  console.log('SELECTED', cartData);
  return (
    <ScrollView style={styles.container}>
      {timeDetails.map((time) => {
        return (
          <Card key={time} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.leftContainer}>
                <Text>{time}</Text>
              </View>
              <View style={styles.rightContainer}>
                <Text>SWYNG Whitefield</Text>
                <View style={styles.row}>
                  {
                    court.map((court) => {
                      return (
                        <Chip
                          key={court}
                          mode="outlined"
                          onPress={() => toggle(time, court)}
                          selected={isSelected[time + court]}
                          style={styles.chip}
                          icon
                        >
                          {court}
                        </Chip>
                      )
                    })
                  }
                </View>
              </View>
            </View>
          </Card>
        )
      })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  chip: {
    paddingHorizontal: 20,
    marginVertical: 10,
  }
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
