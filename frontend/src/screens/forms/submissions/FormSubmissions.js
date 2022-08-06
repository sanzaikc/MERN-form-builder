import React from "react";

import { useParams } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

import { SubmissionCard } from "../../../components/SubmissionCard";

import { useLazyGetSubmissionByFormQuery } from "../../../redux/services/submissionService";

export const FormSubmissions = () => {
  const { formId } = useParams();

  // RTKQuery
  const [getFormSubmission, { data: formSubmissions, isLoading, error }] =
    useLazyGetSubmissionByFormQuery();

  React.useEffect(() => {
    if (!formId) return;

    getFormSubmission(formId);
  }, [formId, getFormSubmission]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <>
      {/* <Typography variant="h6">
        {formSubmissions && formSubmissions[0]?.form?.name}
      </Typography> */}
      <Box display="flex" justifyContent="center">
        <Typography variant="h5">
          {`${formSubmissions && formSubmissions[0]?.form?.name} /`} Submissions
        </Typography>
      </Box>
      <br />
      <Grid container gap={4}>
        {!formSubmissions?.length ? (
          <div>No submissions yet</div>
        ) : (
          formSubmissions?.map((submission, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={1.5}>
              <SubmissionCard submission={submission} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};
