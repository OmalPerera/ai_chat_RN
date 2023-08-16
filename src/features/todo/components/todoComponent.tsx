import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../../../types/todo.types';
import {todoList} from '../mockData';

const ToDoComponent = (): React.JSX.Element => {
  const renderTodoItem = (e: Todo) => {
    return (
      <View style={styles.singleListItemContainer}>
        <Text>{e.id + '. '}</Text>
        <Text style={styles.todoListItemTitle}>{e.title}</Text>
        <Text>{e.completed ? 'Done' : 'Todo'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.outermostContainer}>
      <View style={styles.conentWrapper}>
        <Text style={styles.titleStyles}>Todo list</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.addBtnText}>+ Add</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.listContainer}
          data={todoList}
          renderItem={({item}) => renderTodoItem(item)}
          keyExtractor={e => e.id.toString()}
        />
      </View>
    </View>
  );
};

export default ToDoComponent;

const styles = StyleSheet.create({
  outermostContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  conentWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  titleStyles: {
    fontSize: 26,
    fontWeight: '500',
  },
  buttonContainer: {
    borderColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
  },
  addBtnText: {
    fontSize: 18,
  },
  listContainer: {
    width: '100%',
  },
  singleListItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  todoListItemTitle: {
    flex: 1,
  },
});
