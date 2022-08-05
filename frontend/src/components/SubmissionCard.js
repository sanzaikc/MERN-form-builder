import React from "react";

import { useNavigate } from "react-router-dom";

import { Box, Card, CardContent, Typography } from "@mui/material";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

export const SubmissionCard = ({ submission }) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      style={{
        cursor: "pointer",
      }}
      onClick={() => navigate(`/submissions/${submission._id}`)}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <FileDownloadDoneIcon
            style={{
              height: 150,
              width: 100,
              color: "lightgray",
            }}
          />
          <Box>
            <Typography variant="body2">Submitted by:</Typography>
            <Typography variant="body1">{submission.submitter}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
