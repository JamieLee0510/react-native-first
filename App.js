/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  //testing
  Button,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './compoments/GoalItem';
import GoalInput from './compoments/GoalInput';

const App = () => {
  //course testing
  // const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  //control modal visable
  const [isaddMode, setIsAddMode] = useState(false);

  // const goalInputHander = enterText => {
  //   setEnteredGoal(enterText);
  // };

  //add goal in list, then disvisable the modal
  const addGoalHander = goalTitle => {
    //此寫法不一定能保證回傳？？
    //setCourseGoals([...courseGoals, enteredGoal]);

    if (goalTitle === '') {
      return;
    } else {
      //setState，利用函數回調來保證set正確？
      setCourseGoals(currentGoals => {
        return [
          ...courseGoals,
          {id: Math.random().toString(), value: goalTitle},
        ];
      });

      setIsAddMode(false);
    }
  };

  //remove the item in list
  const removeGoalHander = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.testScreen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visableValue={isaddMode} buttonFunction={addGoalHander} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          //有關於delete id的第一個寫法：利用props.deleteListItem.bind(this, props.id)
          //在call deleteListItem 時，才會呼叫
          <GoalItem
            id={itemData.item.id}
            deleteListItem={removeGoalHander}
            title={itemData.item.value}
          />
        )}
      />
      {/* { <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => {
          return (
            <View style={styles.testListItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          );
        }}
      />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  testScreen: {
    padding: 50,
  },
  // testInputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // testInput: {
  //   width: 100,
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // testListItem: {
  //   padding: 10,
  //   marginTop: 10,
  //   backgroundColor: '#ccc',
  //   borderWidth: 1,
  //   borderColor: 'black',
  // },
});

export default App;
