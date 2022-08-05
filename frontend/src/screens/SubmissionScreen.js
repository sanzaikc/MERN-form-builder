import React from "react";

import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useLazyGetFormDetailQuery } from "../redux/services/formService";
import { generateField } from "../utils/generateField";
import { Container } from "@mui/system";

export const SubmissionScreen = () => {
  const [submitter, setSubmitter] = React.useState("");
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

    const payload = {
      submitter,
      form: formId,
      values: submission,
    };

    alert(JSON.stringify(payload, null, 2));
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
                  onChange: (e) =>
                    setSubmission({
                      ...submission,
                      [field.label]: e.target.value,
                    }),
                  ...field,
                })}
              </Box>
            ))}
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" padding={3}>
            <TextField
              value={submitter}
              placeholder="Your Name"
              size="small"
              required
              onChange={(e) => setSubmitter(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};
