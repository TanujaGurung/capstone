import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRoles, getId, getUser, removeUserSession } from "../utils/Common";
import UserNavbar from "./UserNavbar";
import NgoNavbar from "./NgoNavbar";
//import useForceUpdate from 'use-force-update';

const NavBarUser = () => {
 // const forceUpdate = useForceUpdate();
  const [user, setUser] = useState({});
  // const userId = "61645060df0bbf0532923f23";
  // const adminId = "61645060df0bbf0532923f25";
  // const ngoId = "616729b2c3c3e8a5c3b27684";
 // const roles = getRoles();
  const [value , setValue] = useState('')
 // console.log("roles is " +roles);
  const id = getId();
  const [roles, setRoles] = useState({});
  useEffect(() => {
    {
      /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */
    }
    setInterval(() => {
      // const userString = localStorage.getItem("user");
      // const user = JSON.parse(userString);
      setUser(getUser());
      // if(roles.toString() === "ROLE_USER"){
      //   setValue(1)}
      setRoles(getRoles())
      
      
    }, []);
    async function fetchData() {
      try {
        const requestUrl = "https://capstoneeee.herokuapp.com/api/user/" + id;
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setValue(resJson.data.roles[0])
     
      //  console.log("role is " +role)
       
        //  console.log(value)
        
      } catch (err) {
        // alert(JSON.stringify(err));
        console.log(err);
      }
    }
    fetchData();
   // forceUpdate();
  }, 5000);
 // console.log(role);

  const logout = () => {
  //  forceUpdate();
    return removeUserSession();
   
  };
  //console.log("user is" + user)
  if (!user) {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-inverse navbar-light bg-light"
          style={{ fontSize: "1.8rem" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
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
                  <Link to="/signin">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  
   if (user) {
    return(
      <React.Fragment>
      <UserNavbar value = {value}/>
      </React.Fragment>
    
    )
    
  }
};

export default NavBarUser;
