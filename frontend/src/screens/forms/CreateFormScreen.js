import { Box, Typography } from "@mui/material";

import { FormBuilder } from "../../components/formBuilder/FormBuilder";

export const CreateFormScreen = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Create Form
        </Typography>
      </Box>
      <br />
      <FormBuilder />
    </>
  );
};
