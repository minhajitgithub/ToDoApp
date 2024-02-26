// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './todo/SplashScreen/SplashScreen';
import screen1 from './todo/SplashScreen/screen1';
import Screen2 from './todo/SplashScreen/screen2';
import LoginScreen from './todo/loginscreen/loginscreen';
import RegisterScreen from './todo/loginscreen/registerscreen';
import HomeScreen from './todo/dashboard/home';
import BottomTab from './todo/Navigation/Bottomtab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
         <Stack.Screen name="Splash" component={SplashScreen} />
         <Stack.Screen name="screen1" component={screen1} />
         <Stack.Screen name="screen2" component={Screen2} />
         <Stack.Screen name="loginscreen" component={LoginScreen} />
         <Stack.Screen name="registerscreen" component={RegisterScreen} />
         <Stack.Screen name="home" component={BottomTab} />
      
        
        
        <Stack.Screen name="BottomTab" component={BottomTab} />
       </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
