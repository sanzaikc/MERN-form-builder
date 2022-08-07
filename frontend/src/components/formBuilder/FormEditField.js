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
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { BaseTextField } from "../formInput/BaseTextField";

import { FormContext } from "../../contexts/FormContext";
import { FormNumberField } from "../formInput";

export const FormEditField = () => {
  const { formElements, selectedElementIndex, handleElementUpdate } =
    useContext(FormContext);

  const inputElement = useMemo(
    () => formElements[selectedElementIndex],
    [formElements, selectedElementIndex]
  );

  // dropdown methods
  const handleInputElementDropdownOptionUpdate = (index, option) => {
    const updatedOptions = inputElement?.options.map((el, i) =>
      index === i ? option : el
    );

    handleElementUpdate(selectedElementIndex, {
      ...inputElement,
      options: updatedOptions,
    });
  };

  const handleRemoveDropdownOption = (index) => {
    const filteredOptions = inputElement?.options.filter(
      (el, i) => i !== index
    );

    handleElementUpdate(selectedElementIndex, {
      ...inputElement,
      options: filteredOptions,
    });
  };

  const handleAddDropdownOption = () => {
    const option = {
      label: `Option ${inputElement.options.length + 1}`,
      value: inputElement.options.length + 1,
    };

    handleElementUpdate(selectedElementIndex, {
      ...inputElement,
      options: [...inputElement.options, { ...option }],
    });
  };

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

              {/* Dropdown  */}
              {inputElement.type === "dropdown" && (
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Options</Typography>
                    <IconButton onClick={handleAddDropdownOption}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Divider />
                  {!!inputElement?.options.length &&
                    inputElement.options.map((el, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        gap={2}
                        marginTop={3}
                      >
                        <span>→</span>
                        <BaseTextField
                          label="Option"
                          value={el.label ?? ""}
                          onChange={(e) =>
                            handleInputElementDropdownOptionUpdate(index, {
                              ...el,
                              label: e.target.value,
                            })
                          }
                        />
                        <BaseTextField
                          label="Value"
                          value={el.value ?? ""}
                          onChange={(e) =>
                            handleInputElementDropdownOptionUpdate(index, {
                              ...el,
                              value: e.target.value,
                            })
                          }
                        />
                        <IconButton
                          disabled={inputElement.options.length < 2}
                          onClick={() => handleRemoveDropdownOption(index)}
                        >
                          <DeleteForeverIcon
                            fontSize="small"
                            color={
                              inputElement.options.length < 2
                                ? "disabled"
                                : "error"
                            }
                          />
                        </IconButton>
                      </Box>
                    ))}
                </Box>
              )}
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
