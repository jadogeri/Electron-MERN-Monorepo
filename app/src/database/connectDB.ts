import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Start MongoMemoryServer and get the connection URI
    const { MongoMemoryServer } = require("mongodb-memory-server");
    const path = require("path");
    const dbPath = path.join(__dirname, "./mongodb/storage");
    const binaryPath = path.join(__dirname, "./mongodb/binaries");

    process.env.MONGOMS_SYSTEM_BINARY = path.join(binaryPath, "mongod.exe");

    const mongod = new MongoMemoryServer({
      instance: {
        dbName: "Test-Database",
        dbPath: dbPath,
        storageEngine: "wiredTiger",
        port: 27017,
      },
      binary: {
        version: "8.2.1",
        downloadDir: binaryPath,
        mongodBinaryPath: path.join(binaryPath, "mongod.exe"),
        skipMD5: true,
        debug: false,
        autoDownload: false,
      },
      autoStart: false,
    });

    await mongod.start();
    const mongoUri = await mongod.getUri();

    console.log("MongoDB In-Memory URI:", mongoUri);

    // Connect mongoose to the in-memory instance
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds of waiting for connection
      dbName: "Test-Database", // Specify the database name
      //   useNewUrlParser: true,
      //  useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err: unknown) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Throw error to handle it in the caller function
  }
}

