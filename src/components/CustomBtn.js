import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomBtn = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#B12AD4', '#D428A7']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  linearGradient: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
