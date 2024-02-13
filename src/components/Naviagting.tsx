import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Naviagting() {
  function navigate(websiteLink: string): void {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text>Naviagting</Text>
      <View style = {styles.naviagtingSubCon}>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
            navigate("https://www.google.com/?&bih=663&biw=1366&hl=en");
          }}>
          <Text style={styles.readMoreButton}>Read more.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    naviagtingSubCon : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
  readMoreButton: {
    fontSize: 18,
    backgroundColor: 'red',
    padding: 5,
    margin: 10,
    width: '50%',
  },
});
