import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import Addtask from './Addtask';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const toggleModal = () => { 
    setModalVisible(!isModalVisible);
  };

  const handleAddTask = (task) => {
    setTasks((addTasks) => [...addTasks, task]);
    toggleModal();
  };
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((item,index) => index!== taskId));
  };
  const renderItem = ({ item,index }) => (
    <View style={styles.taskItem}>
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.taskText}>{item.task}</Text>
    </ScrollView>
    <TouchableOpacity onPress={() => handleDeleteTask(index)} style={styles.deleteButton}>
    <Icon name="trash" size={20} color="red" style={styles.trash} />
    </TouchableOpacity>
  </View>
);
const handlePopButtonPress = () => {
  if (tasks.length > 0) {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.pop();
      return newTasks;
    });
  } 
};
  return (
 

  
    <View style={styles.container}>
    
    <TouchableOpacity onPress={toggleModal} style={styles.button}>
      <Text style={styles.buttonText}>Add Task</Text>
    </TouchableOpacity>
    <Addtask isVisible={isModalVisible} handleClose={toggleModal} addTask={handleAddTask} />
    
    {/* Task List */}
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.taskList}
    />
 <TouchableOpacity onPress={handlePopButtonPress} style={styles.popButton}>
        <Text style={styles.popButtonText}>Pop</Text>
      </TouchableOpacity>
     {/* Custom Back icon */}
     {/* <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/158.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <Text style={styles.middleText}>Index</Text>

      <TouchableOpacity style={styles.profileButton}>
        <Image source={require('../assets/pic.png')} style={styles.profileImage} />
      </TouchableOpacity> */}

      {/* Your content goes here */}
      {/* <Image source={require('../assets/home.png')} style={styles.image} />
      <Text style={styles.text}>What do you want to do today?</Text>
      <Text style={styles.additionalText}>Tap + to add your tasks {'\n'}</Text> */}

      {/* Rounded Profile Picture in the top-right corner */}


    </View>
  
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Ensures the container fills the height
  },
  scrollContainer: {
    maxHeight: 100, // Set a maximum height for the scroll view within each task item
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 160,
  },
  deleteButton: {
    position: 'absolute',
    top: -1,
    right:0,
  },
  text: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  middleText: {
    position: 'absolute',
    top: '12%',
    left: '55%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 213,
    height: 277.78,
    top: 200,
    resizeMode: 'contain',
  },
  additionalText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  profileButton: {
    position: 'absolute',
    top: 55,
    right: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 55,
    left:20,
    zIndex: 1, // Make sure the back button appears on top
  },
  menuIcon: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
  image: {
    width: 213,
    height: 277.78,
    top: 50,
    resizeMode: 'contain',
  },
  circleContainer: {
    position: 'absolute',
    bottom: 47, // Adjust the positioning as needed
    left: '49%', // Center the container horizontally
    transform: [{ translateX: -30 }], // Adjust the translateX based on half of the container width
    backgroundColor: '#8687E7', // Add your desired color
    borderRadius: 50, // Adjust the border radius as needed
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Make sure it appears above the navBar
  },
  circleIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  taskItem: {
    backgroundColor: '#3E3E3E',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
  
    position: 'absolute',
    top: 130, 
    right: 20, 
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },

 
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  popButton: {
    position: 'absolute',
    top: 130, // Adjust the position as needed
    right: 350,
    backgroundColor: '#3498db', // Use your desired color
    padding: 10,
    borderRadius: 5,
  },
  popButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default HomeScreen;
