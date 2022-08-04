import { configureStore } from "@reduxjs/toolkit";
import { formApi } from "./services/formService";

export const store = configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});
