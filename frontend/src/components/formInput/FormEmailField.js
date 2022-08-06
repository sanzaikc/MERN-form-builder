import React from "react";

import { BaseTextField } from "./BaseTextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const FormEmailField = (props) => {
  return (
    <BaseTextField
      label="Email Field"
      type="email"
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <AlternateEmailIcon />
      //     </InputAdornment>
      //   ),
      // }}
      {...props}
    />
  );
};
