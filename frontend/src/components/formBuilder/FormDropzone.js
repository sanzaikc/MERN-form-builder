import React, { useContext } from "react";

import { useDrop } from "react-dnd";

import { Box, Button, Divider, Paper, TextField } from "@mui/material";

import { ItemTypes } from "../../utils/dndItemTypes";
import { FormTemplate } from "./FormTemplate";

import { FormContext } from "../../contexts/FormContext";

export const FormDropzone = () => {
  const [formName, setFormName] = React.useState("");

  const { formElements, setFormElements, handleAddInputField } =
    useContext(FormContext);

  //   DND hooks
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.INPUT,
    drop: (item, moniter) => handleAddInputField(item),
    collect: (moniter) => ({
      isOver: !!moniter.isOver(),
    }),
  });

  //   methods
  const handleFormReset = () => {
    setFormElements([]);
    setFormName("");
  };

  const handleCreateForm = () => {
    const formPayload = {
      name: formName,
      fields: [...formElements],
    };
    console.log(formPayload);
  };

  return (
    <Paper>
      <Box paddingX={3} paddingY={2}>
        <Box display="flex" justifyContent="space-between" alignItems="end">
          <TextField
            // variant="filled"
            placeholder="Enter form name"
            size="small"
            style={{ width: "50%" }}
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Button
              variant="contained"
              disabled={!formName.length || !formElements.length}
              onClick={handleCreateForm}
            >
              Save
            </Button>
            <Button variant="outlined" onClick={handleFormReset}>
              Reset
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />

      <Box
        ref={drop}
        padding={3}
        style={{
          border: "1px solid gray",
          borderStyle: isOver ? "dashed" : "",
          backgroundColor: isOver ? "lightgreen" : "",
        }}
      >
        <FormTemplate />
      </Box>
    </Paper>
  );
};
