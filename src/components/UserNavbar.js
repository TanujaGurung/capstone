import React from "react";
import { Link ,useHistory} from "react-router-dom";
import { removeUserSession } from "../utils/Common";
//import useForceUpdate from 'use-force-update';
//import { useHistory } from "react-router-dom";

const UserNavbar =(props) =>
{
  const userId = "61645060df0bbf0532923f23";
  const adminId = "61645060df0bbf0532923f25";
  const ngoId = "616729b2c3c3e8a5c3b27684";
  const history = useHistory(); 

  const logout = () => {
   // forceUpdate();
   
  
   removeUserSession();
   history.push("/signin")
     
  };
  if(props.value === userId || props.value === adminId){
   // console.log("props.value " + props.value)
    return(
      <React.Fragment>
          <nav
            className="navbar navbar-inverse navbar-light bg-light"
            style={{ fontSize: "1.8rem" }}
          >
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand active" to="/">
                  Hopes
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/donate">Donate</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                 
                  <li>
                    <Link to="/signin" onClick={logout}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </React.Fragment>
  )
  }
  else{
    return(
      <React.Fragment>
        <nav
          className="navbar navbar-inverse navbar-light bg-light"
          style={{ fontSize: "1.8rem" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand active" to="/">
                Hopes
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                <Link to="/mycart">Cart</Link>
              </li>
              <li>
                <Link to="/orders">Your Orders</Link>
              </li>
                <li>
                  <Link to="/sigin" onClick={logout}>
                     Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>

  )
  }
    
}
export default UserNavbar