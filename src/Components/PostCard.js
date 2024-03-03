import React from "react";


const PostCard= ({postInfo})=>{

    return(
        <div className="postCard">
            <p><strong>Name:</strong> {postInfo.Name}</p>
            <p><strong>Branch:</strong> {postInfo.BranchType}</p>
            <p><strong>Delivery Status:</strong> {postInfo.DeliveryStatus} </p>
            <p><strong>District:</strong> {postInfo.District} </p>
            <p><strong>State:</strong> {postInfo.State}</p>
        </div>
    )
}

export default PostCard