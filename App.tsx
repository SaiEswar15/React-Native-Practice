import {StyleSheet, Text, View, SafeAreaView, useColorScheme} from 'react-native';

function App() {

  const isDarkMode = useColorScheme() === "dark"

  return (
    <View style = {style.container}>
      <Text style = {isDarkMode ? style.darkText : style.whiteText}>hello world !!!</Text>
    </View>
  );
}

const style = StyleSheet.create({

  container : 
  {
    flex :1,
    justifyContent : "center",
    alignItems : "center"
  },

  whiteText :
  {
    color : "white",
  },

  darkText :
  {
    color : "dark",
  }


});

export default App;
