const express = require("express");
const cors = require("cors");
const path = require("path");
const useRouter = require("./Router/router.js");
const { connectToMongoDB } = require("./connect");
const cookieParser = require("cookie-parser");
const morgan = require( "morgan");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const app = express();
const PORT = process.env.PORT;
const ConnectionUrl = process.env.CONNECTION_URL;
const FrontendUrl = process.env.FRONTEND_URL;

const corsOptions = {
  origin: FrontendUrl,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan());
app.use("/uploads", express.static("uploads"));


//Routes
app.use("/login", useRouter);
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});




if (process.env.NODE_ENV !== 'vercel') {
  connectToMongoDB(ConnectionUrl)
    .then((data) => {
      console.log(`DB connected with server: ${data.connection.host}`);
      app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}