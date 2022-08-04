import { Router } from "express";

import {
  addSubmission,
  getAllSubmissions,
} from "../controllers/submissionController.js";

const router = Router();

router.route("/").get(getAllSubmissions).post(addSubmission);

export default router;
