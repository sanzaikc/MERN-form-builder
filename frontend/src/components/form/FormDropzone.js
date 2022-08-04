import React, { useContext } from "react";

import { useDrop } from "react-dnd";

import { Box, Button, Paper } from "@mui/material";

import { ItemTypes } from "../../utils/dndItemTypes";
import { FormTemplate } from "./FormTemplate";

import { FormContext } from "../../contexts/FormContext";

export const FormDropzone = () => {
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
  const handleCreateForm = () => {
    const payload = {
      name: "Test Form",
      fields: [...formElements],
    };
    console.log(payload);
  };

  return (
    <>
      <Paper>
        <Box
          ref={drop}
          paddingX={3}
          paddingY={2}
          style={{
            border: "1px solid gray",
            borderStyle: isOver ? "dashed" : "",
          }}
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            gap={2}
            marginBottom={2}
          >
            <Button
              size="small"
              variant="contained"
              disabled={!formElements.length}
              onClick={handleCreateForm}
            >
              Save
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setFormElements([])}
            >
              Reset
            </Button>
          </Box>

          <FormTemplate />
        </Box>
      </Paper>
      <Box padding={3}>
        <pre>{JSON.stringify({ formElements }, null, 2)}</pre>
      </Box>
    </>
  );
};
