import React, { useContext, useMemo } from "react";

import { useDrop } from "react-dnd";
import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  TextField,
} from "@mui/material";

import { ItemTypes } from "../../utils/dndItemTypes";
import { FormTemplate } from "./FormTemplate";

import { FormContext } from "../../contexts/FormContext";
import {
  useCreateFormMutation,
  useLazyGetFormDetailQuery,
} from "../../redux/services/formService";

export const FormDropzone = () => {
  const [formName, setFormName] = React.useState("");

  const navigate = useNavigate();

  const { formId } = useParams();

  const editMode = useMemo(() => !!formId, [formId]);

  // context
  const { formElements, setFormElements, handleAddInputField } =
    useContext(FormContext);

  // RTKQuery
  const [createForm, { isLoading: creatingForm }] = useCreateFormMutation();

  const [getFormDetail, { data: formDetail, isLoading: gettingDetail }] =
    useLazyGetFormDetailQuery();

  //   DND hooks
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.INPUT,
    drop: (item, moniter) => handleAddInputField(item),
    collect: (moniter) => ({
      isOver: !!moniter.isOver(),
    }),
  });

  //   methods
  const handleFormReset = () => {
    setFormElements(!formDetail ? [] : formDetail.fields);
    setFormName(!formDetail ? "" : formDetail.name);
  };

  const handleCreateForm = () => {
    const formPayload = {
      name: formName,
      fields: [...formElements],
    };

    createForm(formPayload)
      .unwrap()
      .then((res) => {
        if (!res) return;

        handleFormReset();

        navigate("/");
      });
  };

  const handleEditForm = () => {
    alert(JSON.stringify(formElements, null, 2));
  };

  React.useEffect(() => {
    if (!formId) return;
    getFormDetail(formId);
  }, [formId, getFormDetail]);

  React.useEffect(() => {
    if (!formDetail) return;

    setFormName(formDetail.name);
    setFormElements(formDetail.fields);
  }, [formDetail, setFormElements]);

  return (
    <Paper>
      <Box paddingX={3} paddingY={2}>
        <Box display="flex" justifyContent="space-between" alignItems="end">
          <TextField
            placeholder="Enter form name"
            size="small"
            style={{ width: "50%" }}
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Button
              variant="contained"
              disabled={
                !formName.length || !formElements.length || creatingForm
              }
              onClick={editMode ? handleEditForm : handleCreateForm}
            >
              {creatingForm && (
                <CircularProgress size={16} style={{ marginRight: 4 }} />
              )}
              {editMode ? "Update" : "Save"}
            </Button>
            <Button variant="outlined" onClick={handleFormReset}>
              Reset
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />

      <Box
        ref={drop}
        padding={3}
        style={{
          border: "1px solid gray",
          borderStyle: isOver ? "dashed" : "",
          backgroundColor: isOver ? "lightgreen" : "",
        }}
      >
        <FormTemplate />
      </Box>
    </Paper>
  );
};
