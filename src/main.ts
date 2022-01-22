import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { tweet } from "./tweet";
import cors from "cors";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>GET THE TWEET BY ADDING USERNAME</h1>`);
});
app.get("/tweet", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(await tweet(req.query));
});
app.listen(port, () => {
  console.log(`listening on https://${process.env.host}:${process.env.PORT}`);
});
