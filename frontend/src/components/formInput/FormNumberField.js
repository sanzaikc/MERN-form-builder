import React from "react";

import { BaseTextField } from "./BaseTextField";

export const FormNumberField = (props) => {
  return (
    <BaseTextField
      label="Text Field"
      type="number"
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      {...props}
    />
  );
};
