import { Router } from "express";

import {
  addForm,
  getAllForms,
  getFormDetail,
  updateForm,
} from "../controllers/formController.js";

const router = Router();

router.route("/").get(getAllForms).post(addForm);

router.route("/:formId").get(getFormDetail).put(updateForm);

export default router;
