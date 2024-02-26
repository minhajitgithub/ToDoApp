// BottomTab.js
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../dashboard/home'; // Adjust the path based on your project structure
import { Image, TouchableOpacity, View } from 'react-native';
import Setting from '../dashboard/Setting';
import Addtask from '../dashboard/Addtask';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks)
  };
  return (
    <>
 <Addtask isVisible={showAddTask} handleClose={()=>setShowAddTask(false)} addTask ={addTask} />
    <Tab.Navigator>
    <Tab.Screen
      name='Index'
      component={HomeScreen}
      initialParams={{tasks:tasks}}
      options={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#363636',
          position: 'absolute',
          borderTopWidth: 0,
        },
        
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/home2.png')}
            style={{ width: 24, height: 24, tintColor: '#FFFFFF' }}
          />
        ),
        tabBarLabelStyle: {
          color: '#FFFFFF', // Set the color for the text under the icon
        },
      }}
      />
       <Tab.Screen
        name='Calendar'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#363636',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/calendar.png')}
              style={{ width: 24, height: 24, tintColor: '#FFFFFF' }}
            />
            
          ),
        
          tabBarLabelStyle: {
            color: '#FFFFFF', // Set the color for the text under the icon
          },
        }}
      />

     <Tab.Screen
  name='Add'
  component={HomeScreen}
  listeners={({ navigation })=>({
    tabPress:(e)=>{
      e.preventDefault();
      setShowAddTask(true)

    }
  })}
  options={{
    tabBarLabel:'',
    tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/add.png')}
              style={{ width: 80, height: 80 ,position:'absolute',bottom:10   }}
            />
          ),
  }}
      />
         <Tab.Screen
        name='Focuse '
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#363636',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/clock.png')}
              style={{ width: 24, height: 24, tintColor: '#FFFFFF' }}
            />
          ),
          tabBarLabelStyle: {
            color: '#FFFFFF', // Set the color for the text under the icon
          },
        }}
      />
         <Tab.Screen
        name='Settings'
        component={Setting}
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#363636',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/user.png')}
              style={{ width: 24, height: 24, tintColor: '#FFFFFF' }}
            />
          ),
          tabBarLabelStyle: {
            color: '#FFFFFF', // Set the color for the text under the icon
          },
        }}
      />
    </Tab.Navigator>
   
  
   
  
   
    </>
  );
};

export default BottomTab;