import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import * as bodyParser from "body-parser"
import { corsOptions } from "./configs/cors";
import { errorHandler } from "./middlewares/errorHandler";
import {router as userRouter} from "./routes/userRoutes.route"


dotenv.config();


export const app = express();

export const EXPRESS_APP_PORT= process.env.EXPRESS_APP_PORT  || 4000
export const EXPRESS_APP_HOST= process.env.EXPRESS_APP_HOST as string || "localhost";
export const EXPRESS_APP_PROTOCOL= process.env.EXPRESS_APP_PROTOCOL as string || "http";



app.use(express.json());

app.use("/api/users", userRouter);

app.use(bodyParser.json())
app.use(errorHandler);

app.use(cors(corsOptions)) 

