import express from "express";
import "./dotenv/dotenvConfig.js";
import "./db/connection.js";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import cors from "cors";

const corsOptions = {
  origin: process.env.ENV
    ? "http://localhost:3000"
    : "https://srijan450.github.io/",
};

const port = process.env.PORT || 8000;
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
