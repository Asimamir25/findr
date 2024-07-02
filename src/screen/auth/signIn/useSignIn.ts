import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { signUp } from "../../../../src/store/slices/authSlice/AuthSlice";

export const useSignIn = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [checked, setChecked] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  const dispatch = useAppDispatch();
  const handleName = (text: string) => {
    setName(text);
  };
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSignIn = async () => {
    if (name.length < 5) {
      setError("Name Should be greater than 5 charectar");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Provide Valid Email");
      return;
    }
    if (password.length < 7) {
      setError("Your password must be of character");
      return;
    }
    try {
      setLoading(true);
      await dispatch(signUp({ name, email, password }));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    email,
    name,
    password,
    checked,
    error,
    loading,
    handleName,
    handleEmail,
    handlePassword,
    handleSignIn,
    toggleCheckbox,
  };
};
