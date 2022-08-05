import { Router } from "express";

import {
  addSubmission,
  getAllSubmissions,
  getSubmissionDetail,
} from "../controllers/submissionController.js";

const router = Router();

router.route("/").get(getAllSubmissions).post(addSubmission);

router.route("/:submissionId").get(getSubmissionDetail);

export default router;
