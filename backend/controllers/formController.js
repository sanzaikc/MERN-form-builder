import { Form } from "../models/form.js";
import { Submission } from "../models/submission.js";

export const getAllForms = async (req, res) => {
  const forms = await Form.find();

  res.status(200).json(forms);
};

export const addForm = async (req, res) => {
  const form = await Form.create({ ...req.body });

  res.status(201).json(form);
};
