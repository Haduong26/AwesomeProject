import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { storeData, getStorageData, removeData } from '../../../../utilities/SecureStorage';
import { useCameraPermissions } from '../../../../hooks/useCameraPermissions';
import { useImagePickerWithActionSheet } from '../../../../hooks/useImagePickerWithActionSheet';

const HomeView = connectActionSheet(({ navigation, route, showActionSheetWithOptions }) => {
  const includeBase64 = true;
  const [image, setImage] = useState(null);
  const userProfilePicture = (require('../../../../imgs/gratisography-cyber-kitty-800x525.jpg'));
  const { requestCameraPermission } = useCameraPermissions();
  const { pickImage } = useImagePickerWithActionSheet(showActionSheetWithOptions, ImagePicker, includeBase64);
  const [username, setUsername] = useState('User');
  
  const onChangeImagePress = () => {
    requestCameraPermission().then((result) => {
      if (result === true) {
        pickImage((_image) => {
          if (_image && _image.path) {
            const attributes = {
              avatar: _image.data,
              uri: _image.path,
            };
            setImage(attributes);
          }
        });
      }
    });
  };

  const getAuthData = async () => {
    const authData = await getStorageData('userInfo');
    setUsername(authData?.username);
  }
  useEffect(() => {
    getAuthData();
  }, [])

  const handleLogout = async() => {
    await removeData('userInfo');
    navigation.navigate('Auth', { screen: 'LoginView' });
  }

  return (
    <View>
      <View style={styles.banner}>
        <TouchableOpacity onPress={onChangeImagePress}>
          <Image
            resizeMode={'cover'}
            source={image?.uri ? { uri: image.uri } : userProfilePicture}
            style={styles.ava}/>
            {/* <Image
              width={10}
              height={10}
              source={require('../../../../imgs/camera.png')}/> */}
        </TouchableOpacity>
        <Text>
          Welcome {username}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => handleLogout()}
        >
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default HomeView;