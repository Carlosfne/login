// src/components/Button.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { padding: 15, backgroundColor: "#6200EE", borderRadius: 5 },
  text: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
