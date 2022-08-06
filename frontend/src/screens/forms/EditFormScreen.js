import { Box, Typography } from "@mui/material";

import { FormBuilder } from "../../components/formBuilder/FormBuilder";

export const EditFormScreen = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h5">Edit Form</Typography>
      </Box>
      <br />
      <FormBuilder />
    </>
  );
};
