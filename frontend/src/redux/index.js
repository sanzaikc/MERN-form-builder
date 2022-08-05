import { configureStore } from "@reduxjs/toolkit";

import { formApi } from "./services/formService";
import { submissionApi } from "./services/submissionService";

export const store = configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
    [submissionApi.reducerPath]: submissionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});
