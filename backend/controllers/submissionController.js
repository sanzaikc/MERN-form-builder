import { Submission } from "../models/submission.js";

export const getAllSubmissions = async (req, res) => {
  const submissions = await Submission.find().populate("form");

  res.status(200).json(submissions);
};

export const addSubmission = async (req, res) => {
  const { name, form, values } = req.body;

  const submission = await Submission.create({
    name,
    form,
    values,
  });

  res.status(201).json(submission);
};
