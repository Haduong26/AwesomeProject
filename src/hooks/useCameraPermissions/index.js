import { PermissionsAndroid, Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export const useCameraPermissions = () => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'ios') {
        const checkResult = await check(PERMISSIONS.IOS.CAMERA);
        let granted = await request(PERMISSIONS.IOS.CAMERA);
        if (granted === RESULTS.GRANTED) {
          return true;
        } else if (granted === RESULTS.BLOCKED) {
          if (checkResult === RESULTS.DENIED) {
            return false;
          }
          // Handle blocked permissions
          return false;
        }
      }
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          return false;
        } else {
          showAlert();
          return false;
        }
      }
    };
    return { requestCameraPermission };
  };
