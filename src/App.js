import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import InfoDisplayPage from "./Components/InfoDisplayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PinCodeContext from "./Context/PincodeContext";


import "./stylee.scss"

const App= ()=>{

    const[details, setDetails]= useState(null);
    function getInfo(info){
        setDetails(info);
    }

    return(
        <PinCodeContext.Provider value={{details ,setDetails}}>
            
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="/info" element={<InfoDisplayPage />} />
                </Routes>
            </BrowserRouter>
        </PinCodeContext.Provider>
    )
}

export default App