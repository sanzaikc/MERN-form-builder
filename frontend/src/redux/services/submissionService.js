import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const submissionApi = createApi({
  reducerPath: "submissionApi",
  tagTypes: ["Submission"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getAllSubmissions: builder.query({
      query: () => "/submissions",
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "Submission", id })),
              { type: "Submission", id: "LIST" },
            ]
          : [{ type: "Submission", id: "LIST" }];
      },
    }),

    getSubmissionByForm: builder.query({
      query: (formId) => `/submissions/form/${formId}`,
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "Submission", id })),
              { type: "Submission", id: "FORM" },
            ]
          : [{ type: "Submission", id: "FORM" }];
      },
    }),

    getSubmissionDetail: builder.query({
      query: (submissionId) => `/submissions/${submissionId}`,
      providesTags: (result, error, { _id }) => [{ type: "Submission", _id }],
    }),

    createSubmission: builder.mutation({
      query: (body) => ({ url: `/submissions`, method: "POST", body }),
      invalidatesTags: [{ type: "Submission", id: "LIST" }],
    }),

    updateSubmission: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/submissions/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: (result, error, { _id }) => [
        { type: "Submission", id: "LIST" },
        { type: "Submission", _id },
      ],
    }),
  }),
});

export const {
  useGetAllSubmissionsQuery,
  useCreateSubmissionMutation,
  useLazyGetSubmissionDetailQuery,
  useUpdateSubmissionMutation,
  useLazyGetSubmissionByFormQuery,
} = submissionApi;
