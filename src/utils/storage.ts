import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, value: any): Promise<void> =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getData = async (key: string): Promise<any> => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeData = async (key: string): Promise<void> =>
  AsyncStorage.removeItem(key);
