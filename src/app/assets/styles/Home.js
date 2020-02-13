import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView:{
      marginBottom: 40,
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
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });
  
  export default styles;