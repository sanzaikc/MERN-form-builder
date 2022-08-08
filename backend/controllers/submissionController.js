import mongoose from "mongoose";

import { Form } from "../models/formModel.js";
import { Submission } from "../models/submissionModal.js";

const dynamicSchema = new mongoose.Schema(
  {
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
  },
  { strict: false, timestamps: true }
);

const getModelName = (name) => name.replace(/\s/g, "");

export const getAllSubmissions = async (req, res) => {
  const submissions = await Submission.find().populate("form");

  res.status(200).json(submissions);
};

export const getSubmissionsByForm = async (req, res) => {
  const { formId } = req.params;

  // const submissions = await Submission.find({ form: formId }).populate(
  //   "form",
  //   "name"
  // );

  const { name: formName } = await Form.findById(formId);

  const Model = getModelName(formName);

  const submissions = await mongoose
    .model(Model, dynamicSchema)
    .find()
    .populate("form", "name");

  res.status(200).json(submissions);
};

export const getSubmissionDetail = async (req, res) => {
  const { collectionRef, submissionId } = req.params;

  // const form = await Submission.findById(submissionId).populate("form");

  const form = await mongoose
    .model(collectionRef, dynamicSchema)
    .findById(submissionId)
    .populate("form");

  res.status(200).json(form);
};

export const addSubmission = async (req, res) => {
  const { submitter, form, values } = req.body;

  // const submission = await Submission.create({
  //   submitter,
  //   form,
  //   values,
  // });

  const { name: formName } = await Form.findById(form);
  // removing whitespace for collection name
  const modelName = getModelName(formName);

  const dynamicModel = mongoose.model(modelName, dynamicSchema);

  const submission = await dynamicModel.create({
    submitter,
    form,
    values,
  });

  res.status(201).json(submission);
};
