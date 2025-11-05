import express, {Request, Response} from "express";
const app = express();
import User from "./database/models/User.model";


app.use(express.json());


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

// async function startServer() {
//   try {
//     await connectToDatabase();
//     const server = app.listen(2000, () => {
//       console.log("Server running on http://localhost:2000");
//     });

//     process.on("SIGINT", async () => {
//       console.log("Shutting down server...");
//       await mongoose.disconnect();
//       server.close();
//       console.log("Server shut down.");
//       process.exit(0);
//     });
//   } catch (error) {
//     console.error("Error starting server:", error);
//   }
// }

export {app}