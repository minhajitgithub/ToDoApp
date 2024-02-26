// SplashScreen.js

import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate some loading time (you can replace this with your actual initialization logic)
    const splashTimer = setTimeout(() => {
      // Navigate to the main screen after the splash screen is displayed
      navigation.navigate('screen1'); // Replace 'MainScreen' with the name of your main screen
    }, 2000); // Adjust the duration as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
    
      <Image
        source={require('../assets/logo.png')} // Replace with the path to your logo image
        style={styles.logo}
      />
      <Text style={styles.text}>Up Todo</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set the background color of your splash screen
  },
  logo: {
    width: 113, // Adjust the width and height of your logo as needed
    height: 113,
  },
  text: {
    marginTop: 10, // Adjust the margin as needed
    fontSize: 40, // Adjust the font size as needed
    fontWeight: 'bold',
    color: 'white', // Set the text color
  },
});

export default SplashScreen;
