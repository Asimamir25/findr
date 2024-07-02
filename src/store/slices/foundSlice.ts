import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import { Person, Found, FoundState } from "../../constant/type";
import {
  missingPersonDetailQuery,
  reportCollection,
  reportCollectionGroup,
} from "../../constant/firestoreQueries";

const user = auth().currentUser;
const initialState: FoundState = {
  isLoading: false,
  found: [],
  isError: null,
};

export const getFoundPeople = createAsyncThunk(
  "person/getFoundPerson",
  async () => {
    try {
      const missingResponse = await missingPersonDetailQuery.get();
      const missingData = missingResponse.docs.map(
        (doc) => doc.data() as Person
      );
      const reportResponse = await reportCollectionGroup.get();
      const reportData = reportResponse.docs.map((doc) => doc.data() as Person);
      const combined = [];
      for (let i = 0; i < missingData.length; i++) {
        if (reportData[i]) {
          combined.push({ ...missingData[i], ...reportData[i] });
        }
      }
      return combined;
    } catch (error) {
      return [];
    }
  }
);

export const addFoundPeople = createAsyncThunk(
  "person/addFoundPerson",
  async (person: Found) => {
    try {
      const querySnapshot = await missingPersonDetailQuery
        .where("id", "==", person.selectedItem)
        .get();
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const reportRef = reportCollection(doc.id);
        await reportRef.add({
          location: person.location,
          description: person.description,
          displayName: user?.displayName,
          foundEmail: user?.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const FoundSlice = createSlice({
  name: "CreateFound",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addFoundPeople.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addFoundPeople.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addFoundPeople.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload as Error;
    });
    builder.addCase(getFoundPeople.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFoundPeople.fulfilled, (state, action) => {
      state.isLoading = false;
      state.found = action.payload;
    });
    builder.addCase(getFoundPeople.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload as Error;
    });
  },
});
export default FoundSlice.reducer;
