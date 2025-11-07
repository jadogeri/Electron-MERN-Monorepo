import express, {Request, Response} from "express";

import dotenv from "dotenv";
import cors from "cors"
import * as bodyParser from "body-parser"
import { corsOptions } from "./configs/cors";
import { errorHandler } from "./middlewares/errorHandler";
import {router as userRouter} from "./routes/userRoutes.route"


dotenv.config();


export const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.use(bodyParser.json())
app.use(errorHandler);

app.use(cors(corsOptions)) 



/*

// Route to add a new user
app.post("/api/add_user", async (req: Request, res: Response) => {
  try {
    const { username, email, age } = req.body;
    const user : UserType = { username, email, age }
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user", error });
  }
});

// Route to retrieve all users
app.get("/api/get_users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users", error });
  }
});

*/

