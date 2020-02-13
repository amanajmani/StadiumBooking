
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Chip, Card, FAB } from 'react-native-paper';
import CalendarStrip from 'react-native-calendar-strip';

import {timeDetails, court} from '../utils/constants';
import styles from '../assets/styles/Home';

function Home(props) {
  const [isSelected, setIsSelected] = useState({});
  const [cartData, setCartData] = useState([]);
  const [date, setDate] = useState([moment().format('dddd, MMMM Do YYYY')]);

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

  const navigateToNextScreen = () =>{
      props.navigation.navigate('Cart', {
        params: {date, cartData}
      }); 
  }

  return (
    <React.Fragment>
      <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 30}}
        style={{height: 100, paddingTop: 20, paddingBottom: 10}}
        dateNumberStyle={{color: '#d3d3d3'}}
        dateNameStyle={{color: '#d3d3d3'}}
        highlightDateNumberStyle={{color: 'black'}}
        highlightDateNameStyle={{color: 'black'}}
        onDateSelected={date => setDate(date.format('dddd, MMMM Do YYYY'))}
    />

    <ScrollView>
      <View style={styles.scrollView}>
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
                    })}
                </View>
              </View>
            </View>
          </Card>
        )
      })
      }
      </View>

    </ScrollView>
    <FAB
      style={styles.fab}
      icon="arrow-right"
      label={`${cartData.length.toString()} court hours`}
      onPress={() => navigateToNextScreen()}
    />
  </React.Fragment>
  );
}

export default Home;
