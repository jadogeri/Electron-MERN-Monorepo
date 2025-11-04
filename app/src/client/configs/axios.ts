import axios from 'axios';
import type { AxiosInstance } from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL;

console.log("base url ",baseURL)



const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*",
}

const api : AxiosInstance =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api!==null?"axios api instance created ":" axios api instance does not exist");

export default api