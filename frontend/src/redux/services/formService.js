import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formApi = createApi({
  reducerPath: "formApi",
  tagTypes: ["Form"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getAllForms: builder.query({
      query: () => "/forms",

      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "Form", id })),
              { type: "Form", id: "LIST" },
            ]
          : [{ type: "Form", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetAllFormsQuery } = formApi;
