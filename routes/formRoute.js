import express from "express";
import * as formController from "../controllers/formController.js"
import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();


router.route("/").post(formController.createForm)
router.route("/").get(authMiddleware.authenticateToken,formController.getAllForms)

router.route("/:id").get(formController.getForm)

export default router;