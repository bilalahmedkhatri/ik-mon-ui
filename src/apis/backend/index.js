import axios from "axios";

const apiBackend = axios.create({
  baseURL: "http://192.168.1.85:8000", // error handling with https or Http
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get Data
export async function getBackData(endpoint) {
  try {
    const bResponse = await apiBackend.get(endpoint);
    return { bStatus: "success", bRes: bResponse.data };
  } catch (error) {
    return { bStatus: "fail", bRes: "server not running" };
  }
}

export const fetchPerson = async (id) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
    return { bStatus: "success", bResponse: data };
  } catch (error) {
    return { bStatus: "failure", bResponse: error };
  }
};
