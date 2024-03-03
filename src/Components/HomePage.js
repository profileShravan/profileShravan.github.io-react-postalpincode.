import React, { useState, useContext} from "react";
import { api } from "../Network/api";
import { useNavigate } from "react-router-dom";
import PinCodeContext from "../Context/PincodeContext";
import Loader from "./Loader";



const HomePage= ({getInfo})=>{

    const [isSuccess, setIsSuccess] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const navigate= useNavigate();
    const {setDetails}= useContext(PinCodeContext);

    const getPincodePost=(e)=>{
        e.preventDefault();
        
        let pincode= e.target.pincode.value;

        if(pincode.length>6){
            alert("Please enter a 6 digit pincode")
            return;
        }
        if(pincode==""){
            alert("Please enter pincode first!")
            return;
        }
        
        

        
        (async ()=>{
            setIsFetching(true)
            const {success,data}=  await api(pincode);
            if(success){
                setIsFetching(false);
                // console.log(data);
                let details= {
                    pin: pincode,
                    data
                }
                localStorage.setItem("details",JSON.stringify(details))
                setDetails({pin: pincode, data});
                navigate("/info");
            }
            else{
                alert(data);
                return;
            }
        })()
        


        
    }

    return(
        <div className="form-container">
            {isFetching && !isSuccess? <Loader />: ""}
            <h1>Enter Pincode</h1>
            <div>
                <form onSubmit={getPincodePost} >
                    <input type="text" name="pincode" placeholder="Pincode"></input>
                    <button>Lookup</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage