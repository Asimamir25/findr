import { Linking, ToastAndroid } from "react-native";
export const year = (dob: string) => {
  const dateofBirth = new Date(dob);
  const currentDate = new Date();
  const result = currentDate.getFullYear() - dateofBirth.getFullYear();
  const months = currentDate.getMonth() - dateofBirth.getMonth();
  if (result === 0) {
    return `${months}Month`;
  } else if (months === 0) {
    return `${result}Years `;
  } else {
    return `${result}Year and ${months}Months`;
  }
};

export const openEmail = (email: string) => {
  try {
    const mailtoUrl = `mailto:${email}`;
    Linking.openURL(mailtoUrl);
  } catch (error) {
    ToastAndroid.show("Failed to open  Email!", ToastAndroid.SHORT);
  }
};
