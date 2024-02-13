//importing the images from assets 
import diceOne from  "../../assets/diceOne.png";
import diceTwo from "../../assets/diceTwo.png";
import diceThree from "../../assets/diceThree.png";
import diceFour from "../../assets/diceFour.png";
import diceFive from "../../assets/diceFive.png";
import diceSix from "../../assets/diceSix.png";

import 
{ 
  Image,
  
  StyleSheet, 
  Text, 
  View
} 
from 'react-native'
import React from "react";


export default function ImagesFromAssets() {
  return (
    <View>
      <Text>ImagesFromAssets</Text>
      <Image
      source = {diceOne}
      style = {styles.diceStyles}
      ></Image>
      
    </View>
  )
}

const styles = StyleSheet.create({
  diceStyles : {
    width : 250,
    height : 250
  }
})