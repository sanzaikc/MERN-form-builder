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
        <EditFieldDrawer />
        <Grid container spacing={2}>
          {/* <Grid item md={3.5}>
            <FormEditField />
          </Grid> */}

          <Grid item md={8}>
            <FormDropzone />
          </Grid>

          <Grid item md={4}>
            <FormInputList />
          </Grid>
        </Grid>
      </FormProvider>
    </DndProvider>
  );
};
