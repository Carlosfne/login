export type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export type FormData = { email: string; password: string; confirmPassword: string };

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
  ForgotPassword: undefined;
};