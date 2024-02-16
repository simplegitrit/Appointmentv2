import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { userSlice } from "./features/userSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
  },
});