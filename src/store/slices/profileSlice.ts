import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import { Profile, ProfileState } from "../../constant/type";
import { ToastAndroid } from "react-native";

const initialState: ProfileState = {
  data: undefined,
  isLoading: false,
  isError: null,
};
export const profileUpdate = createAsyncThunk(
  "updateProfile",
  async (profile: Profile) => {
    try {
      const user = auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: profile.name,
        });
        ToastAndroid.show("Name Update  Successfully!", ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show("Error in Updating", ToastAndroid.SHORT);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profileUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(profileUpdate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(profileUpdate.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload as Error;
    });
  },
});
export default profileSlice.reducer;
