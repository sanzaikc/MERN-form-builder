import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Grid } from "@mui/material";

import { FormInputList } from "./dragable/FormInputList";
import { FormDropzone } from "./FormDropzone";
import { FormEditField } from "./FormEditField";

import { FormProvider } from "../../contexts/FormContext";
import { EditFieldDrawer } from "../formFieldEdit/EditFieldDrawer";

export const FormBuilder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <FormProvider>
        <Grid container spacing={2}>
          <EditFieldDrawer />
          <Grid item md={3.5}>
            <FormEditField />
          </Grid>

          <Grid item md={6}>
            <FormDropzone />
          </Grid>

          <Grid item md={2.5}>
            <FormInputList />
          </Grid>
        </Grid>
      </FormProvider>
    </DndProvider>
  );
};
