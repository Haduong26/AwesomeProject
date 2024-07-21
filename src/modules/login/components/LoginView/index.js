import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { storeData, getStorageData } from '../../../../utilities/SecureStorage';

const LoginView = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState(false);

  // check validation
  const handlValidate = async () => {
    if (username.trim() !== '' && password.trim() !== '') {
      // error: storedata does not work, userInfo is null
      await storeData('userInfo', { username: username, password: password });
      console.log('userInfo: ' + getStorageData('userInfo'));
      navigation.navigate('Home', {
        screen: 'HomeView',
        params: { username: username },
      });
    } else {
      setLoginError(true);
    }
  };

  const eyeClosedIcon = require('../../../../imgs/eye_closed.png');
  const eyeOpenIcon = require('../../../../imgs/eye_open.png');

  //handle password visibility
  const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState(eyeOpenIcon);

    const handlePasswordVisibility = () => {
      if (rightIcon === eyeOpenIcon) {
        setRightIcon(eyeClosedIcon);
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === eyeClosedIcon) {
        setRightIcon(eyeOpenIcon);
        setPasswordVisibility(!passwordVisibility);
      }
    };
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility,
    };
  };

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  useEffect(async () => {
    const authData = await getStorageData('userInfo');

    if (authData != null) {
      navigation.navigate('Home', {
        screen: 'HomeView',
        params: { username: authData?.username },
      });
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 50 }}>Login Screen</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#222222"
          onChangeText={username => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#222222"
          secureTextEntry={passwordVisibility}
          onChangeText={password => setPassword(password)}
        />
        <TouchableOpacity
          style={styles.eyeContainer}
          onPress={handlePasswordVisibility}>
          <Image
            tintColor={'#3b3b3b'}
            source={rightIcon}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {loginError && (
        <Text style={styles.error}>Username or password is empty!</Text>
      )}
      <TouchableOpacity style={styles.loginBtn} onPress={() => handlValidate()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;