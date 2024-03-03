import React from "react";
import axios from "axios";


export const api= async (pincode)=>{

    try{

        let response = await axios.get(` https://api.postalpincode.in/pincode/${pincode}`)
    
        if(response.status>=200 && response.status<300){
            // console.log(response);
            return{success:true, data: response.data[0]}
        }
    
        // console.log(response);
    }
    catch(err){
         return {success:false , data:"Something went wrong try again"}
        // alert(err)
    }

}


