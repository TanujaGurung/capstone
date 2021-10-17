import React from "react";
import { removeUserSession, getUser } from "../utils/Common";

const Dashboard = (props) =>{
    const user = getUser();
    const handleLogout =( ) =>{
        removeUserSession();
        props.history.push("/signin")
    }
    return(
        <div>
        <h1>welcome {user}!</h1>
        <button  className="btn btn-lg btn-primary btn-block btn-signin"  onClick={handleLogout}>Log out</button>
        </div>
    )
}
export default Dashboard;