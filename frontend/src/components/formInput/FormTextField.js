import React from "react";

import { BaseTextField } from "./BaseTextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import TextFieldsIcon from "@mui/icons-material/TextFields";

export const FormTextField = (props) => {
  return (
    <BaseTextField
      label="Text Field"
      type="tel"
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <TextFieldsIcon />
      //     </InputAdornment>
      //   ),
      // }}
      {...props}
    />
  );
};
