import React from "react";

import { useParams } from "react-router-dom";

import { Box, Divider } from "@mui/material";

export const SubmissionDetailScreen = () => {
  const { submissionId } = useParams();

  return (
    <>
      <Box padding={3}>Submission Detail: {submissionId}</Box>
      <Divider />
      <Box padding={3}>Content</Box>
    </>
  );
};
