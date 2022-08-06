import React from "react";

import { useDrag } from "react-dnd";

import { Box, Typography } from "@mui/material";

import { ItemTypes } from "../../../utils/dndItemTypes";
import { generateFieldIcon } from "../../../utils/generateFieldIcon";

export const FormInputItem = ({ inputField }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      ...inputField,
    },
    type: ItemTypes.INPUT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      display="flex"
      alignItems="center"
      gap={4}
      style={{
        padding: "15px 20px",
        border: "1px solid lightgray",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {generateFieldIcon(inputField.type)}
      <Typography>{inputField.label}</Typography>
    </Box>
  );
};
