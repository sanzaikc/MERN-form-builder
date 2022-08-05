import React from "react";
import { useParams } from "react-router-dom";

export const SubmissionDetailScreen = () => {
  const { submissionId } = useParams();

  return <div>Submission Detail: {submissionId}</div>;
};
