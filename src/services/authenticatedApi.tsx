import axios from "axios";
const authenticatedApi = axios.create({
  baseURL: "https://api.example.com",
});

// Add an interceptor for all requests
authenticatedApi.interceptors.request.use((config) => {
  // Retrieve the access token from React state or a state management system

  let token: any;
  if (localStorage.getItem("jwt") !== "") {
    token = localStorage.getItem("jwt");
    //token = token1 ? JSON.parse(token1) : null;
  }
  //config.headers.Authorization = `Bearer ${token}`;
  // Add the access token to the Authorization header
  config.headers.Authorization = `Bearer ${token.replace(/['"]+/g, "")}`;

  return config;
});

export default authenticatedApi;
