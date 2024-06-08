import { Router } from "express";

import upload from "../middleware/multer.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/product.controller.js";

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(upload.single("image"), createProduct);

router.route("/:id").delete(deleteProduct);

export default router;
