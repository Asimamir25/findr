import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist } from "../../../constant/type";
import "expo-dev-client";
import { useAppSelector, useAppDispatch } from "../../../store/hooks/hooks";
import {
  signIn,
  googleSignIn,
} from "../../../store/slices/authSlice/AuthSlice";
import { ToastAndroid } from "react-native";

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const IsLoading = useAppSelector((state) => state.auth.isLoading);
  const navigation = useNavigation<StackNavigationProp<RootStackParamlist>>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const handleSignUp = async () => {
    if (!email || !password) {
      setError("Email and Password can not be Empty");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please Provide Valid Email");
      return;
    }
    if (password.length < 8) {
      setError("Password Must Be 8 of Character");
      return;
    }
    try {
      setLoading(true);
      await dispatch(signIn({ email, password }));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const onGoogleButtonPress = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      ToastAndroid.show("Login Error!", ToastAndroid.SHORT);
    }
  };

  return {
    password,
    email,
    navigation,
    IsLoading,
    error,
    loading,
    onGoogleButtonPress,
    handlePassword,
    handleSignUp,
    handleEmail,
  };
};
