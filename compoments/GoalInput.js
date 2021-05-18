import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  //把state 從App.js中抽離出來，在組件中運作
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHander = enterText => {
    setEnteredGoal(enterText);
  };

  return (
    <Modal visible={props.visableValue} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHander}
          value={enteredGoal}
          placeholder="course go"
          style={styles.inputItem}
        />
        <Button
          title="test button"
          onPress={props.buttonFunction.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputItem: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
