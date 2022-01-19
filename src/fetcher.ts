import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();
export const fetch = async (props:any) =>{
 const config = {
    method: 'get',
    url: `https://api.twitter.com/2/users/by?usernames=${props.username}&user.fields=profile_image_url`,
    headers: { 
      'Authorization': `Bearer ${process.env.BEARERTOKEN}`, 
      'Cookie': 'guest_id=v1%3A164250843583935391; guest_id_ads=v1%3A164250843583935391; guest_id_marketing=v1%3A164250843583935391; personalization_id="v1_tbXy8q8y6LzFU+s8v66jMQ=="'
    }
  };
  
  const {data:response} = await axios(config as any)
  console.log(response);
  return response;
}
