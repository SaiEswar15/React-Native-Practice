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
  ImageSourcePropType, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View
} 
from 'react-native'
import React, {useState} from "react";
import type { PropsWithChildren } from 'react';


type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): JSX.Element =>{
  return (
  <Image
  source = {imageUrl}
  style = {styles.diceStyles}
  ></Image>);
}

//creating an component Dice with arrow function
//this is returning any but we need to get image very specific ImageSourcePropType




export default function ImagesFromAssets(): JSX.Element {

  const [dice, setDice] = useState(diceTwo);

  function rollFunction(str : string): void{
    console.log("rolling the dice")

    const randomNumber = Math.floor(Math.random()*6) + 1;

    switch (randomNumber) {
      case 1:
        setDice(diceOne)
        break;
      case 2 :
        setDice(diceTwo)
        break;
      case 3 :
        setDice(diceThree)
        break;
      case 4 :
        setDice(diceFour)
        break;
      case 5 :
        setDice(diceFive)
        break;
      case 6 :
        setDice(diceSix)
        break;
      default:
        setDice(diceOne)
        break;
    }
  }

  return (
    <View>
      <Text>ImagesFromAssets</Text>
      <Dice imageUrl ={dice}></Dice>
      <TouchableOpacity
      onPress={() =>rollFunction("yup")}>
        <Text style = {styles.rollButton}>Roll the dice</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  diceStyles : {
    width : 250,
    height : 250
  },
  rollButton : {
    padding : 20,
    width : 250,
    backgroundColor : "orange"
  }
})