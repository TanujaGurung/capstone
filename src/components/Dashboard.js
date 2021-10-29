
import React,{useState, useEffect} from "react";
import { removeUserSession, getUser,getToken,getMobile,getAddress,getId,getRoles} from "../utils/Common";
import axios from "axios";
import PostCard from "./PostCard";
//import Upload from "./Upload";
import NgoDashboard from "./NgoDashboard"
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import { Link } from "react-router-dom";

const Dashboard = (props) =>{
    const userId = "61645060df0bbf0532923f23"
    const adminId="61645060df0bbf0532923f25"
    const [post , setPost] =useState([])
    const [requestError, setRequestError] = useState("")
    const [role, setRole] = useState("")

    const user = getUser();
    const mobile = getMobile();
    const address = getAddress();
    // const accessToken = getToken();
    const id = getId();
    const roles = getRoles();
   // const user1 = getUserNewTab();
   
    
    
   
    const apiUrl = "https://capstoneeee.herokuapp.com/api";
    const handleLogout =( ) =>{
      props.history.push("/signin")
        removeUserSession();
        //props.history.push("/signin")
    }
    useEffect(() => {
        async function fetchData() {
          
            try {
                const requestUrl = 'https://capstoneeee.herokuapp.com/api/user/' + id;
                const res = await fetch(requestUrl);
                const resJson = await res.json();
                setRole(resJson.data.roles[0]);
            } catch (err) {
               // alert(JSON.stringify(err));
                console.log(err);
            }
        }
        fetchData();
    }, "");
   
//    useEffect(() => {
//       const fetchData= async ()=>{
//           try {
//               const result = await axios.get("http://capstoneeee.herokuapp.com/api/DonationPost")
//               setPost(JSON.stringify(result.data));
//             //   alert(JSON.stringify(result.data))
//               console.log(post)
//           }catch(err){
//               setRequestError(err.message);
//           }
//       }
//       fetchData(); 
//    }, [])

    return (
      <div>
     {user!= null? ( <div className="container-fluid" >
        <h1 style={{textAlign:"center" }}>welcome {user}!</h1>
       

        <div className="container-fluid">
          <div class="row"></div>
          {role === userId ? (
            <UserDashboard />
          ) : role === adminId ? (
            <AdminDashboard/>
          ) : (
            <NgoDashboard />
          )}
          <br></br>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block btn-signin"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>):(<div><h1>Kindly login to see your account <Link to ="/signin">Go to Login page</Link></h1></div>) }
      </div>
    );
}
export default Dashboard;