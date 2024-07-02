import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { forgotUpdate } from "../../../../src/store/slices/authSlice/AuthSlice";
import { ToastAndroid } from "react-native";

export const useForgotPasspword = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const user = auth().currentUser;

  const handleResetPassword = async (email: string) => {
    try {
      setLoading(true);
      if (!email) {
        setError("Email can not be Empty");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Please Provide Valid Email");
        return;
      }
      await dispatch(forgotUpdate(email));
      setError("");
    } catch (error) {
      ToastAndroid.show(" Server Error !", ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };
  return {
    email,
    loading,
    handleEmail,
    handleResetPassword,
    user,
    error,
  };
};
