import React from "react";

import { Box, IconButton, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
            {generateField(item.type, {
              style: {
                width: "50%",
              },
            })}
            <IconButton onClick={() => onRemoveElement(index)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        ))}
      </Stack>
    </>
  );
};
