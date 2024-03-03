import React, {useContext, useState} from "react";
import PinCodeContext from "../Context/PincodeContext";
import PostCard from "./PostCard";

const InfoDisplayPage = ()=>{

    
    let {details} = useContext(PinCodeContext);
    if(details==null){
        details= JSON.parse(localStorage.getItem("details"));
    }
    const [filterPincodes, setFilterPinCodes]= useState(details.data.PostOffice);
    
    

    
    const {pin, data}=  details;
    const {Message, PostOffice, Status} = data;
    
    // console.log(pin,Message, PostOffice);

    function filterPincodes_by_name(e){
        let inputText= (e.target.value).toLowerCase().trim();
        let filteredArr= PostOffice.filter((postOffice)=>{

            return (postOffice.Name.toLowerCase().includes(inputText));
        })

        setFilterPinCodes(filteredArr);
    }
    


    

    return(
        <div className="postCard-container">
            <h1>Pincode: {pin}</h1>
            <h2  >Message: <span style={Status==="Error"? {color:"red"}: {color:"blue"}}>{Message}</span></h2>
            {filterPincodes!= null && <div className="filter-input"><input onChange={filterPincodes_by_name} type="text" placeholder="filter 🔎"></input> </div>}

            {
                filterPincodes!=null? 
                filterPincodes.length>0 ?<div>
                <div className="pincodeList">
                    {filterPincodes.map(postInfo=>{
                        return(
                            <PostCard key={postInfo.Name} postInfo={postInfo}  />
                        )
                    })}
                </div>
            </div>: <p className="empty-arr" >"Couldn’t find the postal data you’re looking for…"</p>: ""
                
            }
        </div>
    )
}

export default InfoDisplayPage





