import { Platform, ToastAndroid } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import storage from "@react-native-firebase/storage";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addMissing } from "../../store/slices/personsSlice";
import auth from "@react-native-firebase/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist } from "../../constant/type";

export const UseCreateMissingPerson = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamlist>>();
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [nickName, setnickName] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [eye, setEye] = useState<string>("");
  const [hair, setHair] = useState<string>("");
  const [hairLength, sethairLength] = useState<string>("");
  const [lastSeen, setLastSeen] = useState<string>("");
  const [lastSeenLocation, setLastSeenLocation] = useState<string>("");
  const [dateOfBirth, setdateOfBirth] = useState<string>("");
  const [birthdate, setBirthDate] = useState(new Date());
  const [show, setShow] = useState(true);
  const [second, setSecond] = useState(true);
  const dispatch = useAppDispatch();
  const [load, setLoad] = useState(false);
  const aser = auth().currentUser;
  const [id, setid] = useState<number>(1);
  const [error, setError] = useState<string>();
  const addTodo = () => {
    const email = aser?.email;

    let person = {
      image,
      name,
      gender,
      nickName,
      lastSeen,
      lastSeenLocation,
      height,
      weight,
      eye,
      hair,
      hairLength,
      dateOfBirth,
      email,
      id: Math.round(Math.random() * 1000),
    };
    try {
      if (!image || !dateOfBirth || !name || !hairLength) {
        setError("Field Can not empty");
        return;
      }
      if (name.length < 4) {
        setError("Name Can not be less than 6 character");
        return;
      }
      if (nickName.length < 4) {
        setError("Name Can not be less than 6 character");
        return;
      }
      if (gender.length < 4) {
        setError("gender Can not be less than 4 character");
        return;
      }
      if (lastSeenLocation.length < 14) {
        setError("Last Seen Location Can not be less than 14 character");
        return;
      }
      if (height.length > 2) {
        setError("Height  Can not be greater than 2 character");
        return;
      }
      if (weight.length > 3) {
        setError("Weight  Can not be greater than 3 character");
        return;
      }
      if (eye.length < 3) {
        setError("Eye Color  Can not be less than 3 character");
        return;
      }
      if (hair.length < 3) {
        setError("Hair Color  Can not be less than 3 character");
        return;
      }
      if (hairLength.length < 3) {
        setError("Hair Length  Can not be less than 3 character");
        return;
      }
      dispatch(addMissing(person));
      setEye("");
      setName("");
      setGender("");
      setnickName("");
      setLastSeen("");
      setHeight("");
      setWeight("");
      setHair("");
      sethairLength("");
      setImage("");
      setError("");
      setLastSeen("");
      setdateOfBirth("");
      setLastSeenLocation("");

      navigation.navigate("report");
    } catch (error) {
      ToastAndroid.show("Error!", ToastAndroid.SHORT);
    }
  };
  const showDateCalender = () => {
    setShow(!show);
  };
  const lastCalender = () => {
    setSecond(!second);
  };
  const handleName = (text: string) => {
    setName(text);
  };
  const handleGender = (text: string) => {
    setGender(text);
  };
  const handleDateChange = (
    { type }: { type: string },
    selectedDate: Date | undefined
  ) => {
    if (type == "set" && selectedDate) {
      const currentdate = selectedDate;
      setDate(currentdate);

      if (Platform.OS == "android") {
        showDateCalender();
        setdateOfBirth(currentdate.toDateString());
      }
    }
  };
  const handleBirthDay = (
    { type }: { type: string },
    selectedDate: Date | undefined
  ) => {
    if (type == "set" && selectedDate) {
      const currentdate = selectedDate;
      setBirthDate(currentdate);

      if (Platform.OS == "android") {
        lastCalender();
        setLastSeen(currentdate.toDateString());
      }
    }
  };

  const handleNick = (text: string) => {
    setnickName(text);
  };

  const handleHeight = (text: string) => {
    setHeight(text);
  };
  const handleWeight = (text: string) => {
    setWeight(text);
  };
  const handleEye = (text: string) => {
    setEye(text);
  };
  const handleHair = (text: string) => {
    setHair(text);
  };
  const handleHairLength = (text: string) => {
    sethairLength(text);
  };
  const handleLastSeen = (text: string) => {
    setLastSeen(text);
  };
  const handleLastSeenLocation = (text: string) => {
    setLastSeenLocation(text);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setLoad(true);
        const imageUri = result.assets[0].uri;
        const imageName = imageUri.substring(imageUri.lastIndexOf("/") + 1);
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const reference = storage().ref().child(`images/${imageName}`);
        await reference.put(blob);
        const downloadURL = await reference.getDownloadURL();
        setImage(downloadURL);
        setLoad(false);
      }
    }
  };

  return {
    image,
    name,
    gender,
    date,
    nickName,
    lastSeen,
    lastSeenLocation,
    height,
    weight,
    eye,
    hair,
    hairLength,
    show,
    dateOfBirth,
    birthdate,
    second,
    load,
    error,
    lastCalender,
    handleName,
    handleGender,
    handleDateChange,
    handleBirthDay,
    handleNick,
    handleHeight,
    handleWeight,
    handleEye,
    handleHair,
    handleHairLength,
    handleLastSeen,
    handleLastSeenLocation,
    pickImage,
    addTodo,
    showDateCalender,
  };
};
