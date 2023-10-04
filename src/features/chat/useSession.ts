import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const getValue = async (key: string, initialVal: any) => {
  try {
    const saveVal = await AsyncStorage.getItem(key);
    if (saveVal) {
      return saveVal;
    }
    return initialVal;
  } catch (error) {
    return initialVal;
  }
};

const persistValue = async (key: string, val: any) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error) {
    console.error('Error saving token to AsyncStorage:', error);
  }
};

export const useSession = (key: string, val: any) => {
  const [token, setToken] = useState(() => getValue(key, val));

  useEffect(() => {
    persistValue(key, val);
  }, [key, val]);

  return [token, setToken];
};
