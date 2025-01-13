// src/components/Input.tsx
import React from "react";
import { TextInput, StyleSheet, TextInputProps, View, Text } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput style={styles.input} {...props} />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  label: { marginBottom: 5, fontWeight: "bold" },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 },
  error: { color: "red", marginTop: 5 },
});
