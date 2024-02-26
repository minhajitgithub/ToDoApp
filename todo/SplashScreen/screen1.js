// screen1.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Screen1 = ({ navigation }) => {
  const handleNextPress = () => {
    // Handle the logic to navigate to the next screen
    // For now, let's navigate to a hypothetical "Screen2"
    navigation.navigate('screen2');
  };

  const handleBackPress = () => {
    // Handle the logic to navigate back
    // For now, let's navigate to the previous screen (if available)
    navigation.goBack('');
  };

  const handleSkipPress = () => {
    // Handle the logic for skipping the current screen
    // For now, let's navigate to a hypothetical "HomeScreen"
    navigation.navigate('screen2');
  };
  const handleRoundedRectanglePress = (screenName) => {
    // Handle the logic to navigate to the specified screen
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
        <Text style={[styles.buttonText, { color: 'grey' }]}>SKIP</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/182.png')}
        style={styles.image}
      />

      {/* Rounded rectangles aligned below the logo and above the text */}
      <View style={styles.roundedRectanglesContainer}>
      <TouchableOpacity
        style={[styles.roundedRectangle, { backgroundColor: '#FFFFFF' }]}
        onPress={() => handleRoundedRectanglePress('')}
        />
         <TouchableOpacity
        style={[styles.roundedRectangle, { backgroundColor: '#AFAFAF' }]} 
        onPress={() => handleRoundedRectanglePress('')}
        />
<TouchableOpacity
        style={[styles.roundedRectangle, { backgroundColor: '#AFAFAF' }]}
        onPress={() => handleRoundedRectanglePress('')}
        />
      </View>

      <Text style={styles.text}>Manage your tasks</Text>
      <Text style={styles.additionalText}>
        You can easily manage all of your daily {'\n'}
        tasks in DoMe for free
      </Text>

      {/* Next button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={[styles.buttonText, { color: 'grey' }]}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 30,
  },
  image: {
    width: 213,
    height: 277.78,
    top: -50, // Adjust the positioning as needed
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  additionalText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  roundedRectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10, // Adjust the margin as needed
  },
  roundedRectangle: {
    width: 26.28,
    height: 4,
    borderRadius: 20,
    marginHorizontal: 4, // Adjust the spacing between rectangles
  },
  nextButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 150,
    height: 48,
    padding: 2,
    backgroundColor: '#8875FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'regular',
  },
});

export default Screen1;
