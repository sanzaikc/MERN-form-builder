import { Router } from "express";

import {
  addSubmission,
  getAllSubmissions,
  getSubmissionDetail,
  getSubmissionsByForm,
} from "../controllers/submissionController.js";

const router = Router();

router.route("/").get(getAllSubmissions).post(addSubmission);

router.route("/:submissionId").get(getSubmissionDetail);

router.route("/form/:formId").get(getSubmissionsByForm);

// router.route("/:submissionId/submit").get(getSubmissionDetail);

export default router;
