import React from "react";

import { useDrag } from "react-dnd";

import { Typography, ListItem, ListItemText } from "@mui/material";

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
    <ListItem
      ref={drag}
      style={{
        border: "1px solid lightgray",
        backgroundColor: "skyblue",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <ListItemText>
        <Typography>{inputField.label}</Typography>
      </ListItemText>
    </ListItem>
  );
};
