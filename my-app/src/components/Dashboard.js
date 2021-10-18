import React,{useState, useEffect} from "react";
import { removeUserSession, getUser,getToken,getMobile,getAddress,getId,getRoles} from "../utils/Common";
import axios from "axios";
import PostCard from "./PostCard";
import Upload from "./Upload";
import NgoDashboard from "./NgoDashboard"
import UserDashboard from "./UserDashboard"

const Dashboard = (props) =>{
    
    const [post , setPost] =useState([])
    const [requestError, setRequestError] = useState("")
    const [role, setRole] = useState(true)

    const user = getUser();
    const mobile = getMobile();
    const address = getAddress();
    const accessToken = getToken();
    const id = getId();
    const roles = getRoles();
    if(roles == "ROLE_USER"){
        setRole(true)
    }
    else
    setRole(false)
   
    const apiUrl = "http://capstoneeee.herokuapp.com/api";
    const handleLogout =( ) =>{
        removeUserSession();
        props.history.push("/signin")
    }
   
   useEffect(() => {
      const fetchData= async ()=>{
          try {
              const result = await axios.get("http://capstoneeee.herokuapp.com/api/DonationPost")
              setPost(JSON.stringify(result.data));
            //   alert(JSON.stringify(result.data))
              console.log(post)
          }catch(err){
              setRequestError(err.message);
          }
      }
      fetchData(); 
   }, [])

    return(
        <div>
        <h1>welcome {user}!</h1>
        <h1>{mobile} and {address}</h1>
        <h1>roles {roles}</h1>
       
       
        <h1>{id}</h1>

        <div className="container-fluid">
        <div class="row">
      <Upload />
  
 <h1>{post && post[0]}</h1>
    </div>
    {role ? <UserDashboard/> : <NgoDashboard/>}
    </div>
        <button  className="btn btn-lg btn-primary btn-block btn-signin"  onClick={handleLogout}>Log out</button>
        </div>
    )
}
export default Dashboard;