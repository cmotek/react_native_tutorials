import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer} >
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}  
        />
        <View style={styles.buttons}>
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
      </View>
      </Modal>
      
    );
};

const styles = StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      justifyContent:'space-between',
      width: '60%',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        width: 200, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
})

export default GoalInput;