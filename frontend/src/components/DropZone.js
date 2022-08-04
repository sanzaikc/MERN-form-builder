import React from "react";

import { useDrop } from "react-dnd";

import { Box, Paper } from "@mui/material";
import { ItemTypes } from "../utils/dndItemTypes";

export const DropZone = () => {
  const [formElements, setFormElements] = React.useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.INPUT,
    drop: (item, moniter) => setFormElements([...formElements, { ...item }]),
    collect: (moniter) => ({
      isOver: !!moniter.isOver(),
    }),
  });

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
        <p>{JSON.stringify(formElements)}</p>
      </Box>
    </Paper>
  );
};
