import { ToastAndroid } from "react-native";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { AuthState, User, SignIn, SignUp } from "../../../constant/type";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

GoogleSignin.configure({
  webClientId: process.env.React_App_GOOGLE_CLIENT_ID,
});

export const signUp =
  ({ name, email, password }: SignUp) =>
  async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser?.updateProfile({
        displayName: name,
      });
      ToastAndroid.show("Login Successfully!", ToastAndroid.SHORT);
    } catch (error: any) {
      const errorMessage = error.message;
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    }
  };

export const signIn =
  ({ email, password }: SignIn) =>
  async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      ToastAndroid.show("Login Successfully!", ToastAndroid.SHORT);
    } catch (error: any) {
      const errorMessage = error.message;
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    }
  };
export const googleSignIn = async () => {
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredential);
    ToastAndroid.show("Login !", ToastAndroid.SHORT);
  } catch (error: any) {
    const errorMessage = error.message;
    ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
  }
};

export const signOut = createAsyncThunk("signOut", async () => {
  try {
    auth().signOut();
    ToastAndroid.show("Logout!", ToastAndroid.SHORT);
  } catch (error) {
    ToastAndroid.show("Error in Logout!", ToastAndroid.SHORT);
  }
});

export const forgotUpdate = createAsyncThunk(
  "forgotPassword",
  async (email: string) => {
    try {
      auth().sendPasswordResetEmail(email);
      ToastAndroid.show("Email Sent!", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show("Invalid Email!", ToastAndroid.SHORT);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state) => {
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(forgotUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotUpdate.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(forgotUpdate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as Error;
    });
    builder.addCase(signOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as Error;
    });
  },
});
export const { setUser, setError, setLoading } = AuthSlice.actions;

export default AuthSlice.reducer;
