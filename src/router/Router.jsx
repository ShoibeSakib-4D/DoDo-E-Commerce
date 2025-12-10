import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import Aboutus from "../pages/aboutus/Aboutus";

const Router = () => {
  return (
         <div className="font-urbanist max-w-11/12 mx-auto bg-gray-100">
<HashRouter>
         <Routes>
         <Route element={<Rootlayouts></Rootlayouts>}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        </Route>
       </Routes>
</HashRouter>

         </div>
     
    
  )
}

export default Router
