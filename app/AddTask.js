import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const AddTask = () => {
  const [planText, setPlanText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    // Save the task with a counter
    const newTask = {
      text: planText,
      counter: 0,
    };
    setTasks([...tasks, newTask]);
  
    // Clear the input field after submission
    setPlanText('');
  };

  const handleDelete = (index) => {
    // Delete the task at the specified index
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleIncrement = (index) => {
    // Increment the counter for the specified task
    const updatedTasks = [...tasks];
    updatedTasks[index].counter += 1;
    setTasks(updatedTasks);
  };

  const handleDecrement = (index) => {
    // Decrement the counter for the specified task
    const updatedTasks = [...tasks];
    updatedTasks[index].counter -= 1;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo here"
          value={planText}
          onChangeText={(text) => setPlanText(text)}
        />

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: 'blue' }]}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Display Tasks */}
      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text>{task.text}</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={() => handleDecrement(index)}>
                <Icon name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.counterText}>{task.counter}</Text>
              <TouchableOpacity onPress={() => handleIncrement(index)}>
                <Icon name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Icon
              name="trash"
              size={30}
              color="red"
              style={styles.deleteIcon}
              onPress={() => handleDelete(index)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -60,
    marginLeft: -300,
    padding: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    flex: 1,
  },
  submitButton: {
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taskList: {
    flex: 1,
    width: '100%',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  deleteIcon: {
    marginLeft: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:190,
  },
  counterText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default AddTask;
