import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Flatlist from './src/components/Flatlist';
import Naviagting from './src/components/Naviagting';

function App() {

  // const isDarkMode = useColorScheme() === "dark"

  return (
    <SafeAreaView>
      <ScrollView>
        <Flatlist></Flatlist>
        <Naviagting/>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({

  container : 
  {},

  whiteText :
  {
    color : "black",
    fontSize : 16,
  },

  darkText :
  {
    color : "black",
    
  }


});

export default App;
