import React from "react";

import { useDrag } from "react-dnd";

import { Box, Typography } from "@mui/material";

import { ItemTypes } from "../../../utils/dndItemTypes";

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
      style={{
        padding: "15px 20px",
        border: "none",
        borderBottom: "1px solid lightgray",
        backgroundColor: "#fafafa",
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <Typography>{inputField.label}</Typography>
    </Box>
  );
};
