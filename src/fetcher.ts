import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
export const fetch = async (props: any) => {
  const config = {
    method: "get",
    url: `https://api.twitter.com/2/users/by?usernames=${props.username}&user.fields=profile_image_url`,
    headers: {
      Authorization: `Bearer ${process.env.BEARERTOKEN}`,
    },
  };

  const { data: response } = await axios(config as any);
  console.log(response);
  return response;
};
