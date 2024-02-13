import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Flatlist from './src/components/Flatlist';
import Naviagting from './src/components/Naviagting';
// import ImagesWithLink from './src/components/Images';
import ImagesFromAssets from './src/components/ImagesFromAssets';

function App() {

  // const isDarkMode = useColorScheme() === "dark"

  return (
    <SafeAreaView>
      <ScrollView>
        <Flatlist></Flatlist>
        <Naviagting/>

        {/* <ImagesWithLink></ImagesWithLink> */}
        <ImagesFromAssets></ImagesFromAssets>
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
