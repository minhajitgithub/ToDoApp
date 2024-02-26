
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

const Addtask = ({ isVisible, handleClose, addTask }) => {
  const [task, setTask] = useState('');

  const handlePress = () => {
    addTask({ id: 1, task: task });
    setTask('');
    handleClose();
  };

  return (
    <Modal isVisible={isVisible} >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Add Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handlePress}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Addtask;
