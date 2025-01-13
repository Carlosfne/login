import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Realiza o login do usuário.
 * @param email 
 * @param password 
 * @returns 
 */
export const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const storedUser = await AsyncStorage.getItem(email);
    if (storedUser && JSON.parse(storedUser).password === password) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erro no login:', error);
    return false;
  }
};

/**
 * Realiza o cadastro de um novo usuário.
 * @param email
 * @param password
 * @returns
 */
export const register = async (email: string, password: string): Promise<boolean> => {
  try {
    const existingUser = await AsyncStorage.getItem(email);
    if (!existingUser) {
      await AsyncStorage.setItem(email, JSON.stringify({ email, password }));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return false;
  }
};
