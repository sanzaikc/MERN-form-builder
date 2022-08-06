import { Submission } from "../models/submissionModal.js";

export const getAllSubmissions = async (req, res) => {
  const submissions = await Submission.find().populate("form");

  res.status(200).json(submissions);
};

export const getSubmissionsByForm = async (req, res) => {
  const { formId } = req.params;

  const submissions = await Submission.find({ form: formId }).populate(
    "form",
    "name"
  );

  res.status(200).json(submissions);
};

export const getSubmissionDetail = async (req, res) => {
  const { submissionId } = req.params;

  const form = await Submission.findById(submissionId).populate("form");

  res.status(200).json(form);
};

export const addSubmission = async (req, res) => {
  const { submitter, form, values } = req.body;

  const submission = await Submission.create({
    submitter,
    form,
    values,
  });

  res.status(201).json(submission);
};
