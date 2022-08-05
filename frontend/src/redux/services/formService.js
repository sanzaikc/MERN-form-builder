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

    getFormDetail: builder.query({
      query: (formId) => `/forms/${formId}`,
      providesTags: (result, error, { _id }) => [{ type: "Form", _id }],
    }),

    createForm: builder.mutation({
      query: (body) => ({ url: `/forms`, method: "POST", body }),
      invalidatesTags: [{ type: "Form", id: "LIST" }],
    }),

    updateForm: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/forms/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: (result, error, { _id }) => [
        { type: "Form", id: "LIST" },
        { type: "Form", _id },
      ],
    }),
  }),
});

export const {
  useGetAllFormsQuery,
  useCreateFormMutation,
  useLazyGetFormDetailQuery,
  useUpdateFormMutation,
} = formApi;
