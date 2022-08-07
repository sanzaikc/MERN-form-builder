import React, { useContext } from "react";

import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { FormContext } from "../../contexts/FormContext";
import { BaseTextField } from "../formInput/BaseTextField";

export const ManageFieldOption = () => {
  const { formElements, selectedElementIndex, handleElementUpdate } =
    useContext(FormContext);

  const inputElement = React.useMemo(
    () => formElements[selectedElementIndex],
    [formElements, selectedElementIndex]
  );

  const handleInputElementOptionUpdate = (index, option) => {
    const updatedOptions = inputElement?.options.map((el, i) =>
      index === i ? option : el
    );

    handleElementUpdate(selectedElementIndex, {
      ...inputElement,
      options: updatedOptions,
    });
  };

  const handleRemoveOption = (index) => {
    const filteredOptions = inputElement?.options.filter(
      (el, i) => i !== index
    );

    handleElementUpdate(selectedElementIndex, {
      ...inputElement,
      options: filteredOptions,
    });
  };

  const handleAddOption = () => {
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
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>Options</Typography>
        <IconButton onClick={handleAddOption}>
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
                handleInputElementOptionUpdate(index, {
                  ...el,
                  label: e.target.value,
                })
              }
            />
            <BaseTextField
              label="Value"
              value={el.value ?? ""}
              onChange={(e) =>
                handleInputElementOptionUpdate(index, {
                  ...el,
                  value: e.target.value,
                })
              }
            />
            <IconButton
              disabled={inputElement.options.length < 2}
              onClick={() => handleRemoveOption(index)}
            >
              <DeleteForeverIcon
                fontSize="small"
                color={inputElement.options.length < 2 ? "disabled" : "error"}
              />
            </IconButton>
          </Box>
        ))}
    </Box>
  );
};
