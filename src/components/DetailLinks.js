import React from "react";
import { getUser } from "../utils/Common";
import {Link} from "react-router-dom"



const DetailLinks =() =>{
    const user = getUser()
    console.log(user);
   
    return(
        <div>
        <h4>Details</h4>
        {user!= null ?  (<button className="btn btn-lg btn-primary btn-block btn-signin"><Link to ="/dashboard" style={{textDecoration:"none",color:"white"}}>go to your dashbaord</Link></button>):(<button className="btn btn-lg btn-primary btn-block btn-signin"><Link to ="/signin" style={{textDecoration:"none",color:"white"}}>Kindly login to proceed</Link></button>)}
         </div>)
}

export default DetailLinks