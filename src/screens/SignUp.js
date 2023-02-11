import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Button,
} from 'react-native';
import CustomBtn from '../components/CustomBtn';

function SignUp() {
  const [inputs, setInputs] = useState({
    email: null,
    passowrd: null,
  });

  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSignup = () => {
    alert('User Details : ', inputs.email, inputs.passowrd);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.conatiner}>
        <KeyboardAvoidingView enabled>
          {/*For email*/}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    email: value,
                  };
                })
              }
              placeholder="Enter email"
              placeholderTextColor="#fff"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordRef.current && passwordRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {/*For password*/}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    password: value,
                  };
                })
              }
              placeholder="Enter password"
              placeholderTextColor="#fff"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <CustomBtn onPress={handleSignup} title={'Sign Up'} />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  conatiner: {
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    margin: 10,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#34495E',
    color: '#fff',
    fontSize: 15,
  },
});
