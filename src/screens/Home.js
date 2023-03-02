import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CustomBtn from '../components/CustomBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  //For logging out
  setObjectValue = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('isLoggedIn', jsonValue);
    } catch (e) {
      // save error
      console.log('Error in async storge update method : ', e.message);
    }
    console.log('Update Done.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.conatiner}>
        <Text style={styles.title}>Welcome User!</Text>
        <CustomBtn
          onPress={() => {
            setObjectValue(false);
            navigation.navigate('SignIn');
          }}
          title={'Logout'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101010',
  },
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  form: {
    marginTop: 30,
  },
  inputContainer: {
    margin: 10,
    marginBottom: 0,
  },
  title: {
    margin: 10,
    marginTop: 20,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 16,
  },
  input: {
    padding: 20,
    borderRadius: 15,
    flex: 1,
    backgroundColor: '#171717',
    color: '#fff',
    fontSize: 15,
  },
  textConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    margin: 5,
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  error: {
    marginTop: 5,
    marginHorizontal: 10,
    color: '#f00',
    fontSize: 14,
  },
});
