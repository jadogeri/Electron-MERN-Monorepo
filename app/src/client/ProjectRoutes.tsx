import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import DashBoard from './views/DashBoard';


const ProjectRoutes = () => {
        
      return (

        <HashRouter >
          <Routes >				
            <Route path="/" element={<Home/>} index /> 
            <Route path="/login" element={<Login />}  />             
            <Route path="/dashboard" element={<DashBoard />}  /> 
          </Routes>
        </HashRouter>		
  );
}

export default ProjectRoutes;