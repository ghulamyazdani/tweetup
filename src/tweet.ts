import { fetch } from "./fetcher";
var axios = require("axios");
import * as dotenv from "dotenv";
import tweetcard from "./tweetcard";

dotenv.config();

export const tweet = async (props: any) => {
  const data = await fetch(props);
  return tweetcard(data);
};
