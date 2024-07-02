import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./slices/personsSlice";
import authReducer from "./slices/authSlice/AuthSlice";
import profileReducer from "./slices/profileSlice";
import foundReducer from "./slices/foundSlice";
export const store = configureStore({
  reducer: {
    createMissing: personsReducer,
    auth: authReducer,
    profile: profileReducer,
    foundName: foundReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
