import React from "react";

import TextField from "@mui/material/TextField";

export const BaseTextField = (props) => {
  return (
    <TextField id="outlined-basic" variant="outlined" size="small" {...props} />
  );
};
