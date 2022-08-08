import React from "react";

import { Grid, Typography } from "@mui/material";

import { FormCard } from "../../components/FormCard";

import { useGetAllFormsQuery } from "../../redux/services/formService";

export const FormListScreen = () => {
  const { data: formList, isLoading } = useGetAllFormsQuery();

  if (isLoading) return <div>Loading...</div>;

  return !formList.length ? (
    <div>No Forms Yet!</div>
  ) : (
    <>
      <Typography variant="h5">All Forms</Typography>
      <br />
      <Grid container gap={3}>
        {formList.map((form) => (
          <Grid key={form._id} item xs={12} sm={6} md={4} lg={2.8}>
            <FormCard form={form} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
