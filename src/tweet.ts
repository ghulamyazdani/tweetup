import { fetch, quotefetch } from "./fetcher";
var axios = require("axios");
import * as dotenv from "dotenv";
import tweetcard from "./tweetcard";

dotenv.config();

export const tweet = async (props: any) => {
  const data = await fetch(props);
  const quote = await quotefetch();
  function validate(data: any) {
    if (data.errors) {
      return data.errors[0].detail;
    }
    return tweetcard(data, quote);
  }
  return validate(data);
};
