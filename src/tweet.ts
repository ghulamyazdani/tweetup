import { fetch } from "./fetcher";
var axios = require("axios");
import * as dotenv from "dotenv";
import tweetcard from "./tweetcard";

dotenv.config();

export const tweet = async (props: any) => {
  const data = await fetch(props);
  function validate(data: any) {
    if (data.errors) {
      return data.errors[0].detail;
    }
    return tweetcard(data);
  }
  return validate(data);
};
