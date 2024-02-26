import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Screen2 from '../SplashScreen/screen2';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration purposes, navigate to a hypothetical "HomeScreen"
    navigation.navigate('home');
  };
  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    // For demonstration purposes, you can navigate to a different screen or perform other actions
  };
  const handleAppleLogin =() => {
  };
  const handleRegister = () => {
    // Implement your registration navigation logic here
    // For demonstration purposes, you can navigate to a hypothetical "RegisterScreen"
    navigation.navigate('registerscreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack(Screen2)}>
        <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={[styles.heading, styles.loginHeading]}>Login</Text>
      <Text style={[styles.subHeading,{color:'#979797'}]}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <Text style={[styles.subHeading,{color:'#979797'}]}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={[styles.buttonText, { textAlign: 'center' }]}>LOGIN</Text>
      </TouchableOpacity>

      {/* Separator line and "or" text */}
      <View style={styles.separatorContainer}>
      <View style={[styles.separatorLine, { width: 154,height: 1  }]} />
      <Text style={[styles.buttonText, { textAlign: 'center',color:'#979797' }]}>or</Text>
        <View style={[styles.separatorLine, { width: 50,height: 1 }]} />
      </View>
      {/* Login with Google button */}
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
      <Image source={require('../assets/google.png')} style={styles.googleIcon} />
        <Text style={[styles.buttonText, { textAlign: 'center', color: '#FFFFFF' }]}>Login with Google</Text>
      </TouchableOpacity>
       {/* Login with apple  */}
       <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
       <Image source={require('../assets/apple.png')} style={styles.appleIcon} />
       <Text style={[styles.buttonText, { textAlign: 'center', color: '#FFFFFF' }]}>Login with Apple</Text>
       </TouchableOpacity>
       {/* Register button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    paddingTop: 250, // Adjust the paddingTop as needed
    paddingLeft: 20, // Adjust the paddingLeft as needed
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    marginTop:-100,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop:20,
  },
  loginHeading: {
    marginBottom: 20,
    padding:-30,

  },
  input: {
    height: 48,
    width: 360,
    borderColor: '#979797',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    height: 48,
    width: 360,
    backgroundColor: '#8687E7',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    paddingRight: 30
    
  },
  separatorLine: {

    flex: 1,
    height: 1,
    backgroundColor: '#979797',
  },
  orText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10,
  },
  googleButton: {
    flexDirection: 'row',
    height: 48,
    width: 360,
    borderColor: '#8687E7',
    borderWidth: 2,  // Border width
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  googleIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10, // Adjust the marginRight to add space between the logo and text
  },
  appleButton: {
    flexDirection: 'row',
    height: 48,
    width: 360,
    borderColor: '#8687E7',
    borderWidth: 2,  // Border width
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  appleIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10, // Adjust the marginRight to add space between the logo and text
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    width: '100%', // Take full width of the container
    position: 'absolute', // Position it absolutely
    bottom: 150, // Adjust the bottom spacing as needed
  },
  registerButtonText: {
    color: '#979797',
    fontSize: 16,

  },
  input: {
    height: 48,
    width: 360,
    borderColor: '#979797',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white', // Set the text input color to white
  },
});

export default LoginScreen;
