import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styles from '../assets/styles/Cart';

function Cart({ route }) {
  const { params } = route.params;

  return (
    <React.Fragment>
      {params.cartData.length !== 0 ? (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.header}>{params.date}</Text>
            {params.cartData.map(data => {
              return (
                <Text key={data.key} style={styles.content}>{`${data.court} at ${data.time}`}</Text>
              )
            })}
          </Card.Content>
        </Card>
      ) : (
          <Text style={[styles.header, styles.conditionalHeader]}>Nothing to show here</Text>
        )
      }
    </React.Fragment>
  );
}

export default Cart;