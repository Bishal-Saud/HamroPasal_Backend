import mongoose from "mongoose";

// Define the schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    rate: { type: String, required: true },
    count: { type: String, required: true },
  },
});

// Create the model
const Product = mongoose.model("Product", productSchema);

// Export the model
export default Product;
