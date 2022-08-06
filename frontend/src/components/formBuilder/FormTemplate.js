import React, { useContext } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { FormContext } from "../../contexts/FormContext";

import { FormField } from "./dragable/FormField";

export const FormTemplate = () => {
  const { formElements } = useContext(FormContext);

  return (
    <Stack spacing={1.5}>
      {!formElements?.length ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingY={3}
        >
          <Typography>Drap & Drop Input fields here.</Typography>
        </Box>
      ) : (
        formElements.map((item, i) => (
          <FormField key={i} index={i} item={item} />
        ))
      )}
    </Stack>
  );
};
