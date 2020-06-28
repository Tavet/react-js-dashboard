import axios from "axios";

export default axios.create({
  baseURL: "https://ipapi.co/json",
  responseType: "json",
});
