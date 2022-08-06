import React from "react";

import { BaseTextField } from "./BaseTextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import PhoneIcon from "@mui/icons-material/Phone";

export const FormPhoneField = (props) => {
  return (
    <BaseTextField
      label="Phone Field"
      type="tel"
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <PhoneIcon />
      //     </InputAdornment>
      //   ),
      // }}
      {...props}
    />
  );
};
