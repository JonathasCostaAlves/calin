import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from "../pages/Home";
import Error404 from "../pages/Error404";

export default props => 
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='*' element={<Error404 />}/>
    </Routes>