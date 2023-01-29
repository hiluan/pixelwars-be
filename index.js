import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import canvasRoutes from "./routes/canvas.js";
// import generalRoutes from "./routes/general.js";
// import managementRoutes from "./routes/management.js";
// import salesRoutes from "./routes/sales.js";

// data imports (use only ONCE)
import dataPixels from "./data/index.js";
import Pixel from "./models/Pixel.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/canvas", canvasRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    // ONLY ADD THIS DATA ONE TIME FOR MOCK DB
    // Loop through the 2D array and save each pixel as a separate document
    // BROKE DOWN into CHUNKs to avoid memories error
    // const chunkSize = 500;
    // let i,
    //   j,
    //   chunk = [];
    // for (i = 0; i < 1000; i++) {
    //   for (j = 0; j < 1000; j++) {
    //     chunk.push(new Pixel({ x: j, y: i, color: "white" }));
    //     if (chunk.length === chunkSize) {
    //       Pixel.insertMany(chunk, (error) => {
    //         if (error) {
    //           console.error(error);
    //         }
    //       });
    //       chunk = [];
    //     }
    //   }
    // }
    // Insert the remaining chunk
    // Pixel.insertMany(chunk, (error) => {
    //   if (error) {
    //     console.error(error);
    //   }
    // });
  })
  .catch((error) => console.log(`${error} did not connect.`));
