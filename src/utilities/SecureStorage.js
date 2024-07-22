import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = AsyncStorage;

export const storeData = async (key, data) => {
    try {
      await Storage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('unable to store data', error);
    }
  };

export const getStorageData = async (key) => {
    try {
      const data = await Storage.getItem(key);
      return JSON.parse(data);
    } catch (error) {
      console.log('unable to get data');
      return null;
    }
  };

export const removeData = async (key) => {
    try {
        await Storage.removeItem(key);
    } catch (error) {
      console.log('unable to remove data');
    }
}