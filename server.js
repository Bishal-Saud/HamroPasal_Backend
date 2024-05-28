import { config } from "dotenv";
import app from "./app.js";
import { v2 } from "cloudinary";
config();

//cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
