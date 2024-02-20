import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { contactRouter } from "./route/contactRouter";



dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/",contactRouter)

createConnection()
  .then(async (connection) => {
    console.log("DB Connected...");

    const PORT = 3005;

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

