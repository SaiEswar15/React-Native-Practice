import {Text, View, StyleSheet, ScrollView} from 'react-native';

function Flatlist(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <View style = {styles.textContainer}>
        <Text style = {styles.heading}>Flatlist</Text>
      </View>
        
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.cardOne}>
          <Text>Red</Text>
        </View>
        <View style={styles.cardTwo}>
          <Text>Green</Text>
        </View>
        <View style={styles.cardThree}>
          <Text>Blue</Text>
        </View>
        <View style={styles.cardFour}>
          <Text>Yellow</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'grey',
    padding: 6,
  },
  textContainer : {
    padding : 6,
    // backgroundColor : "pink"
  },
  heading : {
    fontSize : 20,
  },
  container: {
    marginLeft : 10,
  },
  cardOne: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 5
  },
  cardTwo: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 5
  },
  cardThree: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 5
  },

  cardFour: {
    width: 100,
    height: 100,
    backgroundColor: 'orchid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : 5
  },
});

export default Flatlist;
