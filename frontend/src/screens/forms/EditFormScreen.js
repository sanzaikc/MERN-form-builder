import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { FormBuilder } from "../../components/formBuilder/FormBuilder";

export const EditFormScreen = () => {
  const { formId } = useParams();

  return (
    <>
      <Typography variant="h6">Edit Form {formId}</Typography>
      <br />
      <FormBuilder />
    </>
  );
};
