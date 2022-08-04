import React from "react";

import { Box, Stack } from "@mui/material";

import * as FormField from "../formInput";

export const FormTemplate = ({ formElements, onRemoveElement }) => {
  const generateField = (type, props = {}) => {
    const formFieldRef = {
      text: "FormTextField",
      email: "FormEmailField",
      tel: "FormPhoneField",
    };

    const Field = FormField[formFieldRef[type]];

    return Field ? <Field {...props} /> : null;
  };

  return (
    <>
      <Stack spacing={4}>
        {formElements.map((item, index) => (
          <Box key={index}>
            {generateField(item.type)}
            <button onClick={() => onRemoveElement(index)}>Remove</button>
          </Box>
        ))}
      </Stack>
    </>
  );
};
