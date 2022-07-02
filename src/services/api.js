import axios from "axios";

const apiLocation = axios.create({
  baseURL: "http://ip-api.com/json/?fields=city,region,lat,long",
});

export default apiLocation;
