import React from "react";

import { Box, Grid } from "@mui/material";

import { FormInputList } from "../components/formInput/FormInputList";
import { DropZone } from "../components/DropZone";

export const FormBuilderScreen = () => {
  return (
    <Box padding={3}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <FormInputList />
        </Grid>
        <Grid item md={8}>
          <DropZone />
        </Grid>
      </Grid>
    </Box>
  );
};
