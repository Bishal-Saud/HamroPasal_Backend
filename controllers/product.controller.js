import Product from "../model/product.schema.js";
import AppError from "../utills/error.utill.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json({
      success: true,
      message: "All Products here",
      products,
    });
  } catch (error) {
    next(new AppError("Failed to retrieve products", 500)); // Handle any errors
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { title, price, description, category, image, rate, count } =
      req.body;

    if (!title || !price || !description || !category) {
      return next(new AppError("All fields are required", 400));
      // console.log("All fields are required");
    }

    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      image: "dummy",
      rating: {
        rate: rate || "0",
        count: count || "0",
      },
    });

    // console.log(newProduct);

    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "hamropasal",
          crop: "fill",
        });
        // console.log(JSON.stringify(result));
        if (result) {
          console.log(result, "result");
          newProduct.image = result.secure_url;
        }

        // delete
        fs.rm(`upload/${req.file.filename}`);
      } catch (e) {
        return next(new AppError(e.message, 500));
      }
    }

    await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Product Added Successfully ",
      newProduct,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const updateProduct = async (req, res, next) => {};

const deleteProduct = async (req, res, next) => {};

export { createProduct, deleteProduct, updateProduct, getAllProducts };
