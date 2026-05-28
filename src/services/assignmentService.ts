import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const generateAssignment = async (data: any) => {
  const response = await API.post("/assignments/generate", data);

  return response.data;
};
