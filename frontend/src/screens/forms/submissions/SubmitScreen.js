import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { generateField } from "../../../utils/generateField";

import { useLazyGetFormDetailQuery } from "../../../redux/services/formService";
import { useCreateSubmissionMutation } from "../../../redux/services/submissionService";

export const SubmitScreen = () => {
  const [submitter, setSubmitter] = React.useState("");
  const [submission, setSubmission] = React.useState({});

  const { formId } = useParams();

  const navigate = useNavigate();

  // RTKQuery
  const [getFormDetail, { data: formDetail, error, isLoading: gettingDetail }] =
    useLazyGetFormDetailQuery();

  const [createSubmission, { isLoading: sumittingForm }] =
    useCreateSubmissionMutation();

  //   methods
  const handleSubmission = (e) => {
    e.preventDefault();

    const payload = {
      submitter,
      form: formId,
      values: submission,
    };

    createSubmission(payload)
      .unwrap()
      .then((res) => {
        navigate("/");
      });
  };

  React.useEffect(() => {
    if (!formId) return;
    getFormDetail(formId);
  }, [formId, getFormDetail]);

  if (gettingDetail) return <div>Loading...</div>;

  if (error) return <div> Invalid Form! </div>;

  return (
    <>
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
            label="Submitter"
            value={submitter}
            placeholder="Your Name"
            size="small"
            required
            onChange={(e) => setSubmitter(e.target.value)}
          />
          <Button type="submit" variant="contained" disabled={sumittingForm}>
            {sumittingForm && (
              <CircularProgress size={16} style={{ marginRight: 4 }} />
            )}
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};
