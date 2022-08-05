import React, { useContext, useMemo } from "react";

import {
  Box,
  Checkbox,
  Divider,
  FormGroup,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { BaseTextField } from "../formInput/BaseTextField";

import { FormContext } from "../../contexts/FormContext";

export const FormEditField = () => {
  const { formElements, selectedElementIndex, handleElementUpdate } =
    useContext(FormContext);

  const inputElement = useMemo(
    () => formElements[selectedElementIndex],
    [formElements, selectedElementIndex]
  );

  return (
    <>
      <Paper>
        <Box padding={2}>
          <Typography>Edit Field</Typography>
          <Divider />
          <br />
          {!inputElement ? (
            <Typography variant="subtitle2">
              * Select a field to edit *
            </Typography>
          ) : (
            <Stack spacing={2}>
              <BaseTextField
                label="Label"
                fullWidth
                value={inputElement?.label}
                onChange={(e) =>
                  handleElementUpdate(selectedElementIndex, {
                    ...inputElement,
                    label: e.target.value,
                  })
                }
              />

              <FormGroup>
                <FormControlLabel
                  label="Required"
                  control={
                    <Checkbox
                      checked={inputElement?.required ?? false}
                      onChange={(e) =>
                        handleElementUpdate(selectedElementIndex, {
                          ...inputElement,
                          required: inputElement.required ? false : true,
                        })
                      }
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                />
              </FormGroup>
            </Stack>
          )}
        </Box>
      </Paper>
      <Box padding={3}>
        <pre>{JSON.stringify({ formElements }, null, 2)}</pre>
      </Box>
    </>
  );
};
