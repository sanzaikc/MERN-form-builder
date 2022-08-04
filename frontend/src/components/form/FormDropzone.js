import React from "react";

import { useDrop } from "react-dnd";

import { Box, Button, Paper } from "@mui/material";

import { ItemTypes } from "../../utils/dndItemTypes";
import { FormTemplate } from "./FormTemplate";

export const FormDropzone = () => {
  const [formElements, setFormElements] = React.useState([]);

  //   DND hooks
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.INPUT,
    drop: (item, moniter) => handleAddInputField(item),
    collect: (moniter) => ({
      isOver: !!moniter.isOver(),
    }),
  });

  //   methods
  const handleAddInputField = (inputField) => {
    const alreadyInForm = !!formElements.find(
      (el) => el.type === inputField.type
    );
    if (alreadyInForm) return;

    setFormElements([...formElements, { ...inputField }]);
  };

  const handleRemoveInputField = (index) => {
    const inputFields = [...formElements];

    inputFields.splice(index, 1);

    setFormElements([...inputFields]);
  };

  return (
    <>
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

          <FormTemplate
            formElements={formElements}
            onRemoveElement={handleRemoveInputField}
          />
        </Box>
      </Paper>
      <Box padding={3}>
        <pre>{JSON.stringify({ formElements }, null, 2)}</pre>
      </Box>
    </>
  );
};
