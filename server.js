import { express } from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://www.omdbapi.com/?",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
