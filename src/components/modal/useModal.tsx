import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist } from "../../constant/type";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addFoundPeople } from "../../store/slices/foundSlice";
import { openEmail } from "../../utils/util";
import { ModalTypes } from "../../constant/type";
import { ToastAndroid } from "react-native";

export const UseModal = ({ selectedItem }: ModalTypes) => {
  const email = selectedItem?.email;
  const [location, setLocation] = useState<string>();
  const [description, setDescription] = useState<string>();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamlist>>();
  const handleLocation = (text: string) => {
    setLocation(text);
  };
  const handleDes = (text: string) => {
    setDescription(text);
  };
  const handleReport = async (
    location: string | undefined,
    description: string | undefined,
    selectedItem: number | undefined
  ) => {
    try {
      if (!location || !description) {
        setError("Field Can not be empty");
        return;
      }
      if (location.length < 15) {
        setError("Loacation Can not be less then 15 charectar");
        return;
      }
      if (description.length < 20) {
        setError("Description Can not be less then 20 charectar");
        return;
      }
      setLoading(true);
      const person = { location, description, selectedItem };
      dispatch(addFoundPeople(person));
      setError("");
      setLocation("");
      setDescription("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      ToastAndroid.show("Error While Submitting!", ToastAndroid.SHORT);
    }
  };

  const openEmailClient = () => {
    const mailtoUrl = `${email}`;
    openEmail(mailtoUrl);
  };
  return {
    location,
    description,
    navigation,
    error,
    loading,
    handleLocation,
    handleDes,
    handleReport,
    openEmailClient,
  };
};
