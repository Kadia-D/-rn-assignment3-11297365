import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import Icon from 'react-native-vector-icons/Ionicons';

 const categories = [
  { name: 'Exercise', image: require('../assets/exercise.jpg'), tasks: 8 },
  { name: 'Study', image: require('../assets/study.jpg'), tasks: 2 },
  { name: 'Code', image: require('../assets/code.jpg'), tasks: 7 },
  { name: 'Cook', image: require('../assets/cook.jpg'), tasks: 5 },
  { name: 'Read', image: require('../assets/read.jpg'), tasks: 1 },
  { name: 'Meditate', image: require('../assets/meditate.jpg'), tasks: 10 },
  { name: 'Work', image: require('../assets/work.jpg'), tasks: 5 },
  { name: 'Shop', image: require('../assets/shop.jpg'), tasks: 16 },
];

const tasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Push Ups' },
  { id: '4', task: 'Read *As good as dead*' },
  { id: '5', task: 'Grocery Shopping' },
  { id: '6', task: 'Do Yoga' },
  { id: '7', task: 'Finish Assignment' },
  { id: '8', task: 'Clean the Apartment' },
  { id: '9', task: 'Workout' },
  { id: '10', task: 'Learn React Native' },
  { id: '11', task: 'Cook Dinner' },
  { id: '12', task: 'Attend Meeting' },
  { id: '13', task: 'Design UI' },
  { id: '14', task: 'Plan Vacation' },
  { id: '15', task: 'Write Blog Post' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
        <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="ios-search" size={20} color="#000" />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <Icon name="ios-options" size={20} color="#000" style={styles.filterIcon} />
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
            <Text style={styles.categoryTaskCount}>{category.tasks} Tasks</Text>
          </View>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskItem task={item.task} />}
        style={styles.taskList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 14,
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  filterIcon: {
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  category: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTaskCount: {
    fontSize: 14,
    color: '#888',
  },
  taskList: {
    marginBottom: 16,
  },
});

export default HomeScreen;
