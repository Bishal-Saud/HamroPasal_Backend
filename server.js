import { config } from "dotenv";
import app from "./app.js";
config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
