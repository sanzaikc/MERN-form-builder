import React from "react";

import { useParams } from "react-router-dom";

import { Box, Divider, Typography } from "@mui/material";

import { useLazyGetSubmissionDetailQuery } from "../../../redux/services/submissionService";
import { generateField } from "../../../utils/generateField";

export const SubmissionDetailScreen = () => {
  const { submissionId } = useParams();

  // RTKQuery
  const [getSubmissionDetail, { data: submissionDetail, isLoading, error }] =
    useLazyGetSubmissionDetailQuery();

  React.useEffect(() => {
    if (!submissionId) return;

    getSubmissionDetail(submissionId);
  }, [submissionId, getSubmissionDetail]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div> Invalid Form! </div>;

  return (
    <>
      <Box padding={3}>
        <Typography variant="body1">
          Form: {submissionDetail?.form.name}
        </Typography>
        <Typography variant="body2">
          Submitted by: {submissionDetail?.submitter}
        </Typography>
      </Box>
      <Divider />
      <Box padding={3}>
        {submissionDetail?.form?.fields.map((field, index) => (
          <Box key={index} paddingY={2}>
            {generateField(field.type, {
              fullWidth: true,
              value: submissionDetail.values[field.label] ?? "",
              InputProps: {
                readOnly: true,
              },
              ...field,
            })}
          </Box>
        ))}
      </Box>
    </>
  );
};
