import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import { FormCard } from "../../components/FormCard";

import { useGetAllFormsQuery } from "../../redux/services/formService";

export const FormListScreen = () => {
  const { data: formList, isLoading } = useGetAllFormsQuery();

  if (isLoading) return <div>Loading...</div>;

  return !formList.length ? (
    <div>No Forms Yet!</div>
  ) : (
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h5">All Forms</Typography>
      </Box>
      <br />
      <Grid container gap={4}>
        {formList.map((form) => (
          <FormCard key={form._id} form={form} />
        ))}
      </Grid>
    </>
  );
};
