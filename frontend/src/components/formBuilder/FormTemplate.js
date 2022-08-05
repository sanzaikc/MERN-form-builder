import React, { useContext } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import * as FormField from "../formInput";
import { FormContext } from "../../contexts/FormContext";

export const FormTemplate = () => {
  const {
    formElements,
    handleRemoveInputField,
    selectedElementIndex,
    setSelectedElementIndex,
  } = useContext(FormContext);

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
    <Stack spacing={3}>
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
        formElements.map((item, index) => (
          <Box
            key={index}
            style={{
              display: "flex",
              border: "1px solid lightgray",
              borderStyle: "dashed",
              padding: 16,
              backgroundColor: selectedElementIndex === index ? "#cde3fa" : "",
            }}
          >
            {generateField(item.type, {
              disabled: true,
              fullWidth: true,
              label: item.label,
              required: item.required ?? null,
            })}
            <Box display="flex" alignItems="center">
              <IconButton
                style={{ marginLeft: 10 }}
                onClick={() => handleRemoveInputField(index)}
              >
                <DeleteOutlineIcon />
              </IconButton>
              <IconButton
                style={{ marginLeft: 10 }}
                onClick={() => setSelectedElementIndex(index)}
              >
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
        ))
      )}
    </Stack>
  );
};