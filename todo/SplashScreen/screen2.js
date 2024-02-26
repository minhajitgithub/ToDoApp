import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Screen1 from './screen1';

const Screen2 = ({ navigation }) => {
  const handleLoginPress = () => {
    // Handle the logic for navigating to the login screen
    navigation.navigate('loginscreen');
  };

  const handleCreateAccountPress = () => {
    // Handle the logic for navigating to the create account screen
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <View style={styles.container}>
     {/* Custom Back icon */}
     <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack(Screen1)}>
        <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.text}>Welcome to UpTodo</Text>
      <Text style={styles.additionalText}>
        Please login to your account or create {'\n'}a new account to continue
      </Text>

      {/* Login button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8875FF', height: 48, width: 327 }]}
        onPress={handleLoginPress}
      >
        <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>LOGIN</Text>
      </TouchableOpacity>

      {/* Create Account button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: 'black', borderColor: '#8875FF', borderWidth: 2,height: 49, width: 327,},
        ]}
        onPress={handleCreateAccountPress}
      >
        <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>CREATE ACCOUNT</Text>
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
  text: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  additionalText: {
    marginTop: 10,
    fontSize: 16,
    marginBottom:390,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1, // Make sure the back button appears on top
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Screen2;
