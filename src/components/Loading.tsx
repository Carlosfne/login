import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

type LoadingProps = {
  message?: string;
  size?: 'small' | 'large';
};

export const Loading: React.FC<LoadingProps> = ({ message = 'Carregando...', size = 'large' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#6200EE" />
      {message && <Text style={styles.text}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});
