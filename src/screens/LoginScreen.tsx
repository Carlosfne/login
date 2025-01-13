import React from "react";
import { View, StyleSheet, Alert, Text, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type FormData = { email: string; password: string };
type NavigationProps = StackNavigationProp<RootStackParamList>;

export const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const { login } = useAuth();
  const navigation = useNavigation<NavigationProps>();

  const onSubmit = async (data: FormData) => {
    const success = await login(data.email, data.password);
    if (!success) Alert.alert("Erro", "Email ou senha inválidos");
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        rules={{ required: "Email é obrigatório" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input label="Email" onChangeText={onChange} value={value} error={error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: "Senha é obrigatória" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            label="Senha"
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={error?.message}
          />
        )}
      />
      <Button title="Acessar" onPress={handleSubmit(onSubmit)} />

      <View style={styles.newAcess}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  linkContainer: { marginTop: 20, alignItems: "center" },
  link: { color: "#007BFF", marginVertical: 5, textDecorationLine: "underline" },
  newAcess: {marginTop: 20, alignItems: "center"}
});
