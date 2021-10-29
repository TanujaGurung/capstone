import React from "react";
import {Link} from 'react-router-dom'

const Footer =() =>{
    return(
        <React.Fragment>
        <footer class="container-fluid text-center">

        <div class="copyrights" style={{marginTop: '3rem'}}>
            <p>Hopes © 2016, All Rights Reserved
                <br></br>
                <span>Web Design and Implemented By: </span>
                 </p>
                 <p>Tanuja & Winod</p>
                 
            <p><Link to = "/"> Hopes </Link></p>
        </div>
</footer>
        </React.Fragment>
    )
}
export default Footer;