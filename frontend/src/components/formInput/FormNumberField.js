import React from "react";

import { BaseTextField } from "./BaseTextField";

export const FormNumberField = (props) => {
  return (
    <BaseTextField
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      {...props}
    />
  );
};
