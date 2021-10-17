import React, { useState,useEfect } from 'react'
import {Link} from 'react-router-dom'
import {getUser } from "../utils/Common";

//import elogo from './elogo.jpg'


export default class Navbar extends Component {

  const [user, setUser] = useState("");
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
    }, 5000);
    const logout = () => {
      return localStorage.removeItem("user");
  }
    render() {
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
              {user ? <li><Link to="/signin">Log In</Link></li> : <li><Link to="/signout" onClick={logout}>Sign Out</Link></li>}
              
              
              
              
            </ul>
         
          </div>
        </div>
        
      </nav>
                
</React.Fragment>
        )
    }
}
