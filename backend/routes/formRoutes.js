import { Router } from "express";

import {
  addForm,
  getAllForms,
  getFormDetail,
} from "../controllers/formController.js";

const router = Router();

router.route("/").get(getAllForms).post(addForm);
router.route("/:formId").get(getFormDetail);

export default router;
