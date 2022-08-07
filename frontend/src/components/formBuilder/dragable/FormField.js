import React, { useContext } from "react";

import { Box, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import { FormContext } from "../../../contexts/FormContext";

import { generateField } from "../../../utils/generateField";

export const FormField = ({ editable = false, index, item }) => {
  const {
    handleRemoveInputField,
    selectedElementIndex,
    setSelectedElementIndex,
  } = useContext(FormContext);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        borderStyle: "dashed",
        padding: 16,
        backgroundColor: selectedElementIndex === index ? "#cde3fa" : "",
        marginBottom: "1rem",
      }}
    >
      {generateField(item.type, {
        disabled: !editable,
        fullWidth: true,
        ...item,
      })}
      {!editable && (
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
      )}
    </Box>
  );
};
