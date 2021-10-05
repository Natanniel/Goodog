import axios from "axios";

//var host = 'http://localhost:3000';
var host = 'https://nfe.apolluz.com';

// DEV
const api = axios.create({
  baseURL: host,
  headers: { "Content-Type": "application/json" }
});

// Production
//const api = axios.create({
//  baseURL: "http://apiapollo.razorsoft.com.br",
//  headers: { "Content-Type": "application/json", "x-access-token": token }
//});

export default api;
