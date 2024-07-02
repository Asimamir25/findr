import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Missing, PostState } from "../../constant/type";
import { ToastAndroid } from "react-native";
import { missingPersonDetailQuery } from "../../constant/firestoreQueries";
const initialState: PostState = {
  isLoading: false,
  isError: null,
  missing: null,
};
export const getMissing = createAsyncThunk(
  "person/getMissingPerson",
  async () => {
    let fetchData: Missing[] = [];
    try {
      const querySnapshot = await missingPersonDetailQuery
        .orderBy("dateOfBirth", "asc")
        .get();
      querySnapshot.forEach((doc) => {
        const {
          image,
          email,
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
          id,
        } = doc.data();
        fetchData.push({
          nickName,
          lastSeen,
          lastSeenLocation,
          gender,
          height,
          weight,
          eye,
          hair,
          hairLength,
          dateOfBirth,
          image,
          name,
          email,
          id,
        });
      });
      return fetchData;
    } catch (error) {
      ToastAndroid.show("Error in fetching!", ToastAndroid.SHORT);
    }
  }
);
export const addMissing = createAsyncThunk(
  "person/addMissingPerson",
  async (person: Missing) => {
    try {
      await missingPersonDetailQuery.add(person);
      ToastAndroid.show("Person Add Successfully!", ToastAndroid.SHORT);
    } catch (error) {}
  }
);

const personSlice = createSlice({
  name: "CreateMissing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMissing.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addMissing.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addMissing.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload as Error;
    });
    builder.addCase(getMissing.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missing = action.payload;
    });
    builder.addCase(getMissing.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload as Error;
    });
  },
});
export default personSlice.reducer;
