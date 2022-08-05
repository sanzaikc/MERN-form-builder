import React from "react";

import { useNavigate } from "react-router-dom";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";

import { useGetAllFormsQuery } from "../../redux/services/formService";

const FormCard = ({ form }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} xl={1.5}>
      <Card
        variant="outlined"
        style={{
          cursor: "pointer",
        }}
        onClick={() => navigate(`/forms/${form._id}/edit`)}
      >
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <FeedIcon
              style={{
                height: 150,
                width: 100,
                color: "lightgray",
              }}
            />
            <Typography variant="body1">{form.name}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export const FormListScreen = () => {
  const { data: formList, isLoading } = useGetAllFormsQuery();

  if (isLoading) return <div>Loading...</div>;

  return !formList.length ? (
    <div>No Forms Yet!</div>
  ) : (
    <Grid container gap={4}>
      {formList.map((form) => (
        <FormCard key={form._id} form={form} />
      ))}
    </Grid>
  );
};
