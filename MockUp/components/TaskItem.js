import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;
