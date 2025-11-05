import express, {Request, Response} from "express";
import mongoose from "mongoose";
export const app = express();

app.use(express.json());

const UserSchema = new mongoose.Schema({
  user_name: String,
  user_age: Number,
  user_gender: String,
});
const User = mongoose.model("User", UserSchema);


// Route to add a new user
app.post("/api/add_user", async (req: Request, res: Response) => {
  try {
    const { user_name, user_age, user_gender } = req.body;
    const newUser = new User({ user_name, user_age, user_gender });
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

