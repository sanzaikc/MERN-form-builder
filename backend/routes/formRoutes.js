import { Router } from "express";

import { addForm, getAllForms } from "../controllers/formController.js";

const router = Router();

router.route("/").get(getAllForms).post(addForm);

export default router;
