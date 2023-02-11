import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomBtn = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 25,
    margin: 10,
    backgroundColor: '#3498DB',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
