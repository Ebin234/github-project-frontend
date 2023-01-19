import React from "react";
import {BrowserRouter , Route,Routes,Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      
      <Route exact path="/:username" element={<Home/>} />
      <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      </BrowserRouter>
  ); 
}

export default App;
