import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

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

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 16,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
  },
  conditionalHeader: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Cart;