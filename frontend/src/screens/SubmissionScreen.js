import React from "react";

import { useParams } from "react-router-dom";

import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useLazyGetFormDetailQuery } from "../redux/services/formService";
import { generateField } from "../utils/generateField";
import { Container } from "@mui/system";

export const SubmissionScreen = () => {
  const [submission, setSubmission] = React.useState({});

  const { formId } = useParams();

  // RTKQuery
  const [getFormDetail, { data: formDetail, error, isLoading: gettingDetail }] =
    useLazyGetFormDetailQuery();

  React.useEffect(() => {
    if (!formId) return;
    getFormDetail(formId);
  }, [formId, getFormDetail]);

  //   methods
  const handleSubmission = (e) => {
    e.preventDefault();
  };

  if (gettingDetail) return <div>Loading...</div>;

  if (error) return <div> Invalid Form! </div>;

  return (
    <Container maxWidth="sm">
      <Paper>
        <Box padding={3}>
          <Typography variant="h5">{formDetail?.name}</Typography>
        </Box>
        <Divider />
        <form onSubmit={handleSubmission}>
          <Box padding={3}>
            {formDetail?.fields.map((field, index) => (
              <Box key={index} paddingY={2}>
                {generateField(field.type, {
                  fullWidth: true,
                  value: submission[[field.label]],
                  type: field.type,
                  required: field.required,
                  onChange: (e) =>
                    setSubmission({
                      ...submission,
                      [field.label]: e.target.value,
                    }),
                })}
              </Box>
            ))}
          </Box>
          <Divider />
          <Box padding={3}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};
