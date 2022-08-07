import React from "react";

// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

// import { BaseTextField } from "./BaseTextField";

import { FormControl, FormLabel } from "@mui/material";

export const FormDateField = ({ ...props }) => {
  return (
    <FormControl fullWidth={props.fullWidth} required={props.required}>
      <FormLabel id="demo-radio-buttons-group-label" required={props.required}>
        {props.label}
      </FormLabel>
      {/* <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          renderInput={(params) => <TextField {...params} />}
          {...props}
        />
      </LocalizationProvider> */}

      <input
        type="date"
        value={props?.value ?? new Date()}
        {...props}
        style={{
          padding: "12px",
          borderRadius: 5,
          border: "1px solid lightgray",
        }}
      />
    </FormControl>
  );
};
