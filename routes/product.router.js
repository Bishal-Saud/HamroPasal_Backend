import { Router } from "express";

import upload from "../middleware/multer.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

const router = Router();

router.route("/").post(upload.single("image"), createProduct);

export default router;
