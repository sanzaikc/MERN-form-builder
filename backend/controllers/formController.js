import { Form } from "../models/formModel.js";
// import { Submission } from "../models/submission.js";

export const getAllForms = async (req, res) => {
  const forms = await Form.find().sort("-createdAt");

  res.status(200).json(forms);
};

export const getFormDetail = async (req, res) => {
  const { formId } = req.params;

  const form = await Form.findById(formId);

  res.status(200).json(form);
};

export const addForm = async (req, res) => {
  const form = await Form.create({ ...req.body });

  res.status(201).json(form);
};
