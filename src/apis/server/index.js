import axios, { Axios } from "axios";

const apiServer = axios.create({
  baseURL: "http://192.168.1.85:5000", // error handling with https or Http
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get Data
export async function getSerData(endpoint) {
  try {
    const bResponse = await apiServer.get(endpoint);
    return { sStatus: "success", sRes: response.data };
  } catch (error) {
    return { sStatus: "fail", sRes: "server not running" };
  }
}

export default function API() {
  function Address({ APIAddress }) {
    const fromUrl = window.location.href;
    if (fromUrl.includes("3000")) {
      return fromUrl.replace("3000", "8000").concat(APIAddress);
    } else if (fromUrl.includes("3000")) {
      return fromUrl.replace("3001", "8000").concat(APIAddress);
    }
    return fromUrl;
  }

  function AxiosAPI({ APIAddress }) {
    console.log(APIAddress);
    // var url = APIAddress; // Address(APIAddress);
    return APIAddress;
    // try {
    //   const res = await Axios.get(url);
    //   return res.data;
    // } catch (error) {
    //   return none;
    // }
  }
}
