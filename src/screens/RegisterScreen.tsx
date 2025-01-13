import React from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FormData } from "../types";

export const RegisterScreen: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const { register } = useAuth();

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const success = await register(data.email, data.password);
    if (success) {
      Alert.alert("Success", "Account created successfully");
    } else {
      Alert.alert("Error", "Email already exists");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cadastre seu usuário aqui! para seu primeiro acesso</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value:
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input label="Email" onChangeText={onChange} value={value} error={error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters long" },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            label="Password"
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: "Please confirm your password" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            label="Confirm Password"
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={error?.message}
          />
        )}
      />
      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
});
