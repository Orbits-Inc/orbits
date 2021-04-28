import axios from "axios";
import urlencode from "urlencode"

async function addEmail(email){
  console.log(process.env.EMAIL_API)
  let res=await axios.post(process.env.EMAIL_API+urlencode(email),
  {},
  {
    headers: {
      'key':process.env.ADMIN_KEY
    }
  })
  console.log(res)
  return res;
}

export default addEmail;
