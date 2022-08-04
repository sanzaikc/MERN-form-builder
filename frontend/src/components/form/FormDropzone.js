import React, { useContext } from "react";

import { useDrop } from "react-dnd";

import { Box, Button, Paper } from "@mui/material";

import { ItemTypes } from "../../utils/dndItemTypes";
import { FormTemplate } from "./FormTemplate";

import { FormContext } from "../../contexts/FormContext";

export const FormDropzone = () => {
  // const [formElements, setFormElements] = React.useState([]);

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
          // formElements={formElements}
          // onRemoveElement={handleRemoveInputField}
          />
        </Box>
      </Paper>
      <Box padding={3}>
        <pre>{JSON.stringify({ formElements }, null, 2)}</pre>
      </Box>
    </>
  );
};
