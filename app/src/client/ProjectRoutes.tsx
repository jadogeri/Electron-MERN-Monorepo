import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home.view';
import ContextView from './views/Context.view';
import ReduxView from './views/Redux.view';
import Test from './views/Test';


const ProjectRoutes = () => {
        
      return (

        <HashRouter >
          <Routes >				
            <Route path="/" element={<Home/>} index /> 
            <Route path="/context" element={<ContextView />}  />             
            <Route path="/redux" element={<ReduxView />}  /> 
            <Route path="/test" element={<Test />}  /> 

          </Routes>
        </HashRouter>		
  );
}

export default ProjectRoutes;