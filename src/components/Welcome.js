import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import Root from '../Navigator/Root'

const Stack = createStackNavigator();

const Welcome = ({ navigation }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpPress = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignUp = () => {
    // authenticate user and navigate to Root screen if successful
    if (name && surname && email && password) {
      // add authentication logic here
      if (navigation) {
        navigation.navigate('Root');
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to Tourapp</Text>
      </View>
      <View style={styles.content}>
        {!showLogin && !showSignUp && (
          <>
            <Text style={styles.text}>Login or sign up to explore new places!</Text>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
             <Text style={styles.buttonText} onPress={handleSignUpPress}>Sign Up</Text>
           </TouchableOpacity>
          </>
        )}
        {showLogin && (
          <>
            <Text style={styles.text}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Name or Email"
              onChangeText={handleNameChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity style={styles.button} onPress={() => setShowLogin(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        )}
        {showSignUp && (
          <>
            <Text style={styles.text}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleNameChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
              onChangeText={handleSurnameChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleEmailChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity style={styles.button} onPress={() => setShowSignUp(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text> Enter</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#4e92bf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
text: {
fontSize: 18,
textAlign: 'center',
},
button: {
backgroundColor: '#4e92bf',
padding: 10,
borderRadius: 5,
marginTop: 10,
minWidth: 100,
},
buttonText: {
color: 'white',
textAlign: 'center',
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginVertical: 5,
minWidth: 200,
},
});

export default Welcome;  