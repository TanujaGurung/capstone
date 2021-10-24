import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import {getRoles,getId} from "../utils/Common"


const NavBarUser = () => {

    const [user, setUser] = useState({});
    const userId = "61645060df0bbf0532923f23"
    const adminId="61645060df0bbf0532923f25"
    const roles = getRoles();
    console.log(roles);
    const id = getId();
    const [role, setRole] = useState("")
    useEffect(() => {
    { /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */}
        setInterval(() => {
            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            setUser(user);
            }, [])
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
    }, 5000);
    console.log(role)

    const logout = () => {
        
        return localStorage.removeItem("user");
    }

    if (!user) {
        return (
            <React.Fragment>
            <nav className="navbar navbar-inverse navbar-light bg-light" style={{fontSize: '1.8rem'}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <Link className="navbar-brand active" to="/">Hopes</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li ><Link to="/">Home</Link></li>
             
              <li><Link to="/aboutus">About Us</Link></li> 
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              
              <li><Link to="/signin" >Sign In</Link></li>
       
              
            </ul>
         
          </div>
        </div>
        
      </nav>
                
</React.Fragment>
        )
    }
    if (user) {
       if(role === "adminId")
       {
        return (
            <React.Fragment>
            <nav className="navbar navbar-inverse navbar-light bg-light" style={{fontSize: '1.8rem'}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <Link className="navbar-brand active" to="/">Hopes</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li ><Link to="/">Home</Link></li>
             
              <li><Link to="/aboutus">About Us</Link></li> 
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
             
              <li><Link to="/" onClick ={logout} >Sign Out</Link></li>
       
              
            </ul>
         
          </div>
        </div>
        
      </nav>
                
    </React.Fragment>
            )
       }
       else if(role === userId){
        return (
            <React.Fragment>
            <nav className="navbar navbar-inverse navbar-light bg-light" style={{fontSize: '1.8rem'}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <Link className="navbar-brand active" to="/">Hopes</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li ><Link to="/">Home</Link></li>
             
              <li><Link to="/aboutus">About Us</Link></li> 
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/dashboard">Doashboard</Link></li>
              <li><Link to="/" onClick ={logout} >Sign Out</Link></li>
       
              
            </ul>
         
          </div>
        </div>
        
      </nav>
                
    </React.Fragment>
            )
       }
      else
       {
        return (
            <React.Fragment>
            <nav className="navbar navbar-inverse navbar-light bg-light" style={{fontSize: '1.8rem'}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <Link className="navbar-brand active" to="/">Hopes</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li ><Link to="/">Home</Link></li>
             
              <li><Link to="/aboutus">About Us</Link></li> 
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/mycart">Cart</Link></li>
              <li><Link to="/orders">Your Orders</Link></li>
              <li><Link to="/" onClick ={logout} >Sign Out</Link></li>
       
              
            </ul>
         
          </div>
        </div>
        
      </nav>
                
    </React.Fragment>
            )
       }
    }
}
export default NavBarUser;