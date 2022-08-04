import React, { useContext } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import * as FormField from "../formInput";
import { FormContext } from "../../context/FormContext";

export const FormTemplate = () => {
  const { formElements, handleRemoveInputField } = useContext(FormContext);

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
    <Stack spacing={4}>
      {!formElements?.length ? (
        <Box display="flex" alignItems="center" justifyContent="center">
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
            }}
          >
            {generateField(item.type, {
              fullWidth: true,
              label: item.label,
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
                // onClick={() => handleRemoveInputField(index)}
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
