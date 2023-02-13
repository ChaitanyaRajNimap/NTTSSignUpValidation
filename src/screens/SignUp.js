import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomBtn from '../components/CustomBtn';
import validation from '../components/Validation';

function SignUp({navigation}) {
  const [inputs, setInputs] = useState({
    name: null,
    email: null,
    passowrd: null,
  });
  const [error, setError] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
  });

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSignup = () => {
    let name = error.nameError === '' ? true : false;
    let email = error.emailError === '' ? true : false;
    let password = error.passwordError === '' ? true : false;

    if (name && email && password) {
      navigation.navigate('SignIn');
    } else {
      setError(prevErr => {
        return {
          ...prevErr,
          nameError: 'This Feild is Requied.',
        };
      });
      setError(prevErr => {
        return {
          ...prevErr,
          emailError: 'This Feild is Requied.',
        };
      });
      setError(prevErr => {
        return {
          ...prevErr,
          passwordError: 'This Feild is Requied.',
        };
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1}}>
        <View style={styles.conatiner}>
          <Text style={styles.title}>Sign Up</Text>
          <KeyboardAvoidingView enabled style={styles.form}>
            {/*For name*/}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => {
                  let error = validation.validateName(value.trim());
                  setError(prevErr => {
                    return {
                      ...prevErr,
                      nameError: error,
                    };
                  });
                  setInputs(prevValues => {
                    return {
                      ...prevValues,
                      name: value,
                    };
                  });
                }}
                placeholder="Enter name"
                placeholderTextColor="#fff"
                ref={nameRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailRef.current && emailRef.current.focus()
                }
                blurOnSubmit={false}
              />
              <Text style={styles.error}>{error.nameError}</Text>
            </View>
            {/*For email*/}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => {
                  let error = validation.validateEmail(value.trim());
                  setError(prevErr => {
                    return {
                      ...prevErr,
                      emailError: error,
                    };
                  });
                  setInputs(prevValues => {
                    return {
                      ...prevValues,
                      email: value,
                    };
                  });
                }}
                placeholder="Enter email"
                placeholderTextColor="#fff"
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordRef.current && passwordRef.current.focus()
                }
                blurOnSubmit={false}
              />
              <Text style={styles.error}>{error.emailError}</Text>
            </View>
            {/*For password*/}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => {
                  let error = validation.validatePassword(value.trim());
                  setError(prevErr => {
                    return {
                      ...prevErr,
                      passwordError: error,
                    };
                  });
                  setInputs(prevValues => {
                    return {
                      ...prevValues,
                      password: value,
                    };
                  });
                }}
                placeholder="Enter password"
                placeholderTextColor="#fff"
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
              <Text style={styles.error}>{error.passwordError}</Text>
            </View>
            <CustomBtn onPress={handleSignup} title={'Sign Up'} />
            <View style={styles.textConatiner}>
              <Text style={styles.text}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101010',
  },
  conatiner: {
    flex: 1,
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
