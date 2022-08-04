import React from "react";

import { useDrop } from "react-dnd";

import { Grid, Box, Button, Stack, Paper } from "@mui/material";

import { ItemTypes } from "../utils/dndItemTypes";
import { FormTemplate } from "./form/FormTemplate";

export const DropZone = () => {
  const [formElements, setFormElements] = React.useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.INPUT,
    drop: (item, moniter) => handleAddInputField(item),
    collect: (moniter) => ({
      isOver: !!moniter.isOver(),
    }),
  });

  const handleAddInputField = (inputField) => {
    const alreadyInForm = !!formElements.find(
      (el) => el.type === inputField.type
    );
    if (alreadyInForm) return;

    setFormElements([...formElements, { ...inputField }]);
  };

  return (
    <Paper>
      <Box
        ref={drop}
        padding={3}
        style={{
          border: "1px solid gray",
          borderStyle: isOver ? "dashed" : "",
        }}
      >
        <Box display="flex" justifyContent="flex-end" marginBottom={2}>
          <Button
            size="small"
            variant="contained"
            onClick={() => setFormElements([])}
          >
            Reset
          </Button>
        </Box>

        <FormTemplate formElements={formElements} />
      </Box>
    </Paper>
  );
};
