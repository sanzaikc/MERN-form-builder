import React from "react";

import { useParams } from "react-router-dom";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

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
      <Typography variant="h6">
        {formSubmissions && formSubmissions[0]?.form?.name}
      </Typography>
      <br />
      <Grid container gap={4}>
        {!formSubmissions?.length ? (
          <div>No submissions yet</div>
        ) : (
          formSubmissions?.map((submission, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={1.5}>
              <Card
                variant="outlined"
                style={{
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <FileDownloadDoneIcon
                      style={{
                        height: 150,
                        width: 100,
                        color: "lightgray",
                      }}
                    />
                    <Box>
                      <Typography variant="body2">Submitted by:</Typography>
                      <Typography variant="body1">
                        {submission.submitter}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};
