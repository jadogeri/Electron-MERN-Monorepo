import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home.view';
import ContextView from './views/Context.view';
import ReduxView from './views/Redux.view';


const ProjectRoutes = () => {
        
      return (

        <HashRouter >
          <Routes >				
            <Route path="/" element={<Home/>} index /> 
            <Route path="/context" element={<ContextView />}  />             
            <Route path="/redux" element={<ReduxView />}  /> 
          </Routes>
        </HashRouter>		
  );
}

export default ProjectRoutes;