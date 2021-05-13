import  "reflect-metadata";
import "dotenv/config";
import '@shared/container'
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import router from "./routes";
import createConnection from "@shared/infra/typeorm";
import AppError from "@shared/errors/appError";
import upload from "@config/upload";



createConnection();
const app = express();

app.use(express.json());

app.use("/Avatar", express.static(`${upload.tmpFolder}/Avatar`));
app.use("/Cities", express.static(`${upload.tmpFolder}/Cities`));
app.use("/Places", express.static(`${upload.tmpFolder}/Places`));
app.use("/image", express.static(`${upload.tmpFolder}/image`));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })


})
export default app;
