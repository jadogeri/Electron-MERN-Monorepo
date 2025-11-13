import axios from 'axios';
import type { AxiosHeaders, AxiosInstance } from 'axios'

const baseURL = process.env.REACT_APP_EXPRESS_URL; //"http://localhost:5000/api/users"

console.log("base url ",baseURL);

const headers ={
    'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'],
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']

}

const api : AxiosInstance =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api!==null?"axios api instance created ":" axios api instance does not exist");

export default api
