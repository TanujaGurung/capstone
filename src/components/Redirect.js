
import React from "react";
import {Link} from "react-router-dom"


const Redirect =() =>{
    return(
        <div className ="container" >
      <h1> Succesfully registered !!!</h1> 
      <p>go to </p> <Link to = "/sigin">Login page</Link>
      </div>
    )
}

export default Redirect;