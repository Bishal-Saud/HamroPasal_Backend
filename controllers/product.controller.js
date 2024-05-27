import Product from "../model/product.schema.js";

const getAllProducts = async (req, res, next) => {};

const createProduct = async (req, res, next) => {
  try {
    const { title, price, description, category, image } = req.body;

    if (!title || !price || !description || category || image) {
      console.log("All field Required");
    }
    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      image,
      rating: {
        rate: 4.1,
        count: 259,
      },
    });

    if (!newProduct) {
      console.log("new product not Added");
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
