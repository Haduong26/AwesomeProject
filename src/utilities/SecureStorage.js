import {SecureStorage} from 'react-native-secure-storage';

export const storeData = async (key, data) => {
    try {
      await SecureStorage.setItem(key, data);
    } catch (error) {
      // Error saving data
    }
  };

export const getStorageData = async (key) => {
    try {
      return await SecureStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

export const removeData = async (key) => {
    try {
        await SecureStorage.removeItem(key);
    } catch (error) {
    }
}