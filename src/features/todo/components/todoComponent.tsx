import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Todo} from '../../../types/todo.types';
import {useDispatch, useSelector} from 'react-redux';
import {addNewTodoItem} from '../todoAction';

const ToDoComponent = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const isInProgress = useSelector(
    state => state.todoReducer.isTodoItemPending,
  );
  const todoList: Todo[] = useSelector(state => state.todoReducer.todoList);

  const renderTodoItem = (item: Todo) => {
    return (
      <View style={styles.singleListItemContainer}>
        <Text>{item.id + '. '}</Text>
        <Text style={styles.todoListItemTitle}>{item.title}</Text>
        <Text>{item.completed ? 'Done' : 'Todo'}</Text>
      </View>
    );
  };

  const addItemToList = () => {
    dispatch(addNewTodoItem(todoList.length + 1));
  };

  return (
    <View style={styles.outermostContainer}>
      <View style={styles.conentWrapper}>
        <Text style={styles.titleStyles}>Todo list</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={addItemToList}>
          <Text style={styles.addBtnText}>+ Add</Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating={isInProgress}
          size={'small'}
          color={'#000'}
        />
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
