
import React from "react"
import Upload from "./Upload"
import UserCaurosel from "./UserCaurosel"

const UserDashboard =() =>{
return(
    <div className = "container">
    <UserCaurosel />
    <h3  style={{textAlign:"center"}}> Your small contribution can make a big change to some one who is unfortunate..</h3>
    <h5  style={{textAlign:"center" }}>Donate more and share smiles..</h5>
    <br></br>
    <div className = "container">
    <Upload/>
    </div>
    </div>
)
}
export default UserDashboard;


