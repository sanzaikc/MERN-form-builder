import React, { useContext, useMemo } from "react";

import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { BaseTextField } from "../formInput/BaseTextField";

import { FormContext } from "../../contexts/FormContext";
import { FormNumberField } from "../formInput";
import { ManageFieldOption } from "../formFieldEdit/ManageFieldOption";

export const FormEditField = () => {
  const { formElements, selectedElementIndex, handleElementUpdate } =
    useContext(FormContext);

  const inputElement = useMemo(
    () => formElements[selectedElementIndex],
    [formElements, selectedElementIndex]
  );

  const hasEditableOptionTypes = ["dropdown", "radioGroup", "checkbox"];

  return (
    <>
      <Paper elevation={0}>
        <Box padding={2}>
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

              {/* Required toggle  */}
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

              {/* Number Input  */}
              {inputElement.type === "number" && (
                <Box display="flex" gap={4}>
                  <FormNumberField
                    label="Min"
                    value={inputElement?.min}
                    onChange={(e) =>
                      handleElementUpdate(selectedElementIndex, {
                        ...inputElement,
                        min: e.target.value,
                      })
                    }
                  />
                  <FormNumberField
                    label="Max"
                    value={inputElement?.max}
                    onChange={(e) =>
                      handleElementUpdate(selectedElementIndex, {
                        ...inputElement,
                        max: e.target.value,
                      })
                    }
                  />
                </Box>
              )}

              {/* Editable Options */}
              {hasEditableOptionTypes.includes(inputElement.type) && (
                <ManageFieldOption />
              )}

              {/* Min/Max Date  */}
              {inputElement.type === "date" && (
                <Box display="flex" gap={4}>
                  <BaseTextField
                    label="Min"
                    type="date"
                    value={inputElement?.min ?? new Date()}
                    onChange={(e) =>
                      handleElementUpdate(selectedElementIndex, {
                        ...inputElement,
                        min: e.target.value,
                      })
                    }
                  />
                  <BaseTextField
                    label="Max"
                    type="date"
                    value={inputElement?.max ?? new Date()}
                    onChange={(e) =>
                      handleElementUpdate(selectedElementIndex, {
                        ...inputElement,
                        max: e.target.value,
                      })
                    }
                  />
                </Box>
              )}
            </Stack>
          )}
        </Box>
      </Paper>
      {/* <Box padding={3}>
        <pre>{JSON.stringify({ formElements }, null, 2)}</pre>
      </Box> */}
    </>
  );
};
