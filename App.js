import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SignUp from './src/screens/SignUp';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
