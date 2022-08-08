import { Form } from "../models/formModel.js";

export const getAllForms = async (req, res) => {
  const forms = await Form.aggregate([
    {
      $lookup: {
        from: "submissions",
        localField: "_id",
        foreignField: "form",
        as: "submissions",
      },
    },
    {
      $addFields: {
        submissionCount: { $size: "$submissions" },
      },
    },
    {
      $project: {
        name: 1,
        fields: 1,
        submissionCount: 1,
      },
    },
  ]).sort("-createdAt");

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

export const updateForm = async (req, res) => {
  const { name, fields } = req.body;

  const form = await Form.findByIdAndUpdate(req.params.formId, {
    name,
    fields,
  });

  if (!form) throw new Error("Form not found!");

  res.status(201).json(form);
};
