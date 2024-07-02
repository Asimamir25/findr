import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { profileUpdate } from "../../store/slices/profileSlice";

export function UseProfile() {
  const user = auth().currentUser;
  const displayName = user?.displayName || "";
  const [name, setName] = useState<string>(displayName);
  const [email, setEmail] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.profile.isLoading);
  const [error, setError] = useState<string>();
  const handleName = (text: string) => {
    setName(text);
  };
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const updateProfile = async (name: string) => {
    try {
      if (!name) {
        setError("Name can not be Empty");
        return;
      }

      if (name.length < 4) {
        setError("Your name must be 8 Charectar");
        return;
      }
      let profile = {
        name,
        email,
      };
      dispatch(profileUpdate(profile));
    } catch (error) {}
  };

  return {
    user,
    name,
    email,
    isLoading,
    error,
    handleName,
    handleEmail,
    updateProfile,
  };
}
