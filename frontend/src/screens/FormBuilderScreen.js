import React from "react";

import { Box, Grid } from "@mui/material";

import { FormInputList } from "../components/dragable/FormInputList";
import { FormDropzone } from "../components/form/FormDropzone";
import { FormInputEdit } from "../components/form/FormInputEdit";

export const FormBuilderScreen = () => {
  return (
    <Box padding={3}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <FormInputList />
        </Grid>
        <Grid item md={6}>
          <FormDropzone />
        </Grid>
        <Grid item md={3}>
          <FormInputEdit />
        </Grid>
      </Grid>
    </Box>
  );
};
