import { StyleSheet } from 'react-native';

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

export default styles;