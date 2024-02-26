import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome from react-native-vector-icons

const Setting = ({ navigation }) => {
  const handleImagePress = () => {
    // Implement the functionality you want when the image is pressed
    console.log("Image Pressed");
  };
  const handleLogoutPress = () => {
    // Implement logout logic here
    // Example: Clear user authentication, navigate to login screen, etc.
    console.log("Log Out Pressed");
    
    // Navigate to the login screen (replace 'LoginScreen' with your actual login screen name)
    navigation.navigate('loginscreen');
  };
  const handleAdditionalTextPress = () => {
    // Implement the functionality you want when the additional text is pressed
    console.log("Additional Text Pressed");
    // For example, you can navigate to another screen
    // navigation.navigate('AnotherScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>

      <TouchableOpacity style={styles.profileButton} onPress={handleImagePress}>
        <Image source={require('../assets/pic.png')} style={styles.profileImage} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAdditionalTextPress}>
        <Text style={styles.additionalText}>Muhammad Minhaj</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>10 Task Left</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>5 Task Done</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Settings</Text>

      {/* App Option */}
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="cog" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>App Settings</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <Text style={styles.heading}>Accounts</Text>
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="user" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>Change account name</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="key" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>Change account Password</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="camera" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>Change account Image</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <Text style={styles.heading}>Uptodo</Text>
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="exclamation" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>About US</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="question" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>FAQ</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appOption} onPress={() => console.log("App Option Pressed")}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
          <Icon name="bolt" size={20} color="#FFFFFF" style={styles.appIcon} />
          <Text style={styles.appOptionText}>Help & Feedback</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.chevronIcon} />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appOption} onPress={handleLogoutPress}>
      <View style={styles.appOption}>
        <View style={styles.appIconContainer}>
        <Icon name="sign-out" size={20} color="red" style={styles.appIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginTop: 10,
  },
  additionalText: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#363636',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    height: 58,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#AFAFAF',
    fontSize: 14,
    marginTop: 20,
    marginLeft: -280,
  },
  appOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  appIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    marginRight: 10,
  },
  appOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  chevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: -80,
  },
  chevronIcon: {
    marginLeft:'auto',
  },
  logoutText: {
    color: 'red', // Change the color to your desired color
    fontSize: 16,
  },
});

export default Setting;
