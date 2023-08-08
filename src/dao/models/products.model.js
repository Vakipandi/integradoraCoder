import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  stock: { type: Number, required: true },
  code: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  status: { type: Boolean, default: true },
});

export const productsModel = mongoose.model(productCollection, productSchema);
