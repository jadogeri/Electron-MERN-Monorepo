import { CorsOptions } from "cors";

/**
 * @author      Joseph Adogeri
 * @since       27-AUG-2024
 * @version     2.0
 * @description configuration setting for cors
 *  
 */
export const corsOptions : CorsOptions = {
    origin:['*', "http://localhost:3000/","http://localhost:3000"], 
    credentials:true,            //access-control-allow-credentials:true
    //optionSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your allowed origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();