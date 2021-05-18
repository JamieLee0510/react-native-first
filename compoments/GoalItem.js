import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.deleteListItem.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default GoalItem;
