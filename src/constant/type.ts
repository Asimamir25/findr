export type Person = {
  image: string;
  name: string;
  gender: string;
  nickName: string;
  lastSeen: string;
  lastSeenLocation: string;
  height: string;
  weight: string;
  eye: string;
  hair: string;
  hairLength: string;
  show: boolean;
  email: string;
  id: number;
  dateOfBirth: string;
  date: string;
  location: string;
  foundEmail: string;
  displayName: string;
};
export type Found = {
  location: string | undefined;
  description: string | undefined;
  selectedItem: number | undefined;
};
export type ModalTypes = {
  modalVisible: boolean;
  closeModal: () => void;
  selectedItem?: Person | null;
};
export type Prop = {
  title: string;
};
export type InputProps = {
  style?: object;
  value?: string;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  editable: boolean;
  secureTextEntry: boolean;
 onChangeText?: (text: string) => void;
};
export type RootStackParamlist = {
  signIn: undefined;
  sign: undefined;
  home: undefined;
  profile: undefined;
  forgotPassword: undefined;
  tabNavigations: undefined;
  report: undefined;
  news: undefined;
};
export type Missing = {
  image: string;
  name: string;
  gender: string;
  nickName: string;
  lastSeen: string;
  lastSeenLocation: string;
  height: string;
  weight: string;
  eye: string;
  hair: string;
  hairLength: string;
  dateOfBirth: string;
  email: string | null | undefined;
  id: number;
};
export type Profile = {
  name: string;
};
export type ProfileState = {
  data: void;
  isLoading: boolean;
  isError?: Error | null;
};
export type PostState = {
  isLoading?: boolean;
  isError?: Error | null;
  missing: any;
};
export type FoundState = {
  isLoading?: boolean;
  isError?: Error | null;
  found: Person[];
};
export type User = {
  displayName: string;
  email: string;
};
export type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
};
export type SignUp = {
  name: string;
  email: string;
  password: string;
};
export type SignIn = {
  email: string;
  password: string;
};
export type ForgotPassword = {
  email: string;
};
export type ButtonProps = {
  title: string;
  onPress: () => void;
  style: object;
  isLoading: boolean;
};
export type CardProp = {
  year: (dob: string) => string;
  image: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  lastSeen: string;
  lastSeenLocation: string;
};
export type PrimaryCard = {
  image: string;
  name: string;
  dateOfBirth: string;
  lastSeen: string;
  year: (dob: string) => string;
  lastSeenLocation: string;
  gender: string;
};
