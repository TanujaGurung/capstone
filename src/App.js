import React,{useEffect} from 'react'
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
//import Navbar from './components/Navbar'
//import Card from './components/Card'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DetailLinks from "./components/DetailLinks"

import ContactUs from './components/ContactUs';
import Dashboard from "./components/Dashboard";
import Donate from './components/Donate';

import Footer from  "./components/Footer";
import { getUser, removeUserSession } from './utils/Common';
import CartCard from "./components/CartCard"
import NavbarUser from "./components/NavbarUser"
import OrderDetails from './components/OrderDetails';
//import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
   //const [loggedIn , setLoggedIn] = useState(false)
   // const loggedIn = getUser()
  // //   alert ("logged is" + loggedIn)
  // const handleLoggedInStatus =() =>{

  // }
  useEffect(() => {
    document.title = "hopes, we bring together the donor and the acceptor";  
  }, []);
  const user = getUser();
 
const logout = () => {
   
    // setLoggedIn(!loggedIn);
     removeUserSession();
     
  }
  return (
    <React.Fragment>
    
    <BrowserRouter>
    
   
    <NavbarUser />
  
    
  <PublicRoute restricted={false} component={Home} path="/" exact />
    <PublicRoute restricted={false} component={AboutUs} path="/aboutus" exact />
    <PublicRoute restricted={false} component={ContactUs} path="/contactus" exact />
    <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
    <PublicRoute restricted={false} component={SignUp} path="/signup" exact />
    <PrivateRoute component={Dashboard} path="/dashboard" exact />
    <PrivateRoute component={Donate} path="/donate" exact />
    <PrivateRoute component={CartCard} path="/mycart" exact />
    <PrivateRoute component={OrderDetails} path="/orders" exact />
    <Route path='/detail' component={DetailLinks}></Route>
    
       <Footer />
       
    </BrowserRouter>
  
    
   
    </React.Fragment>
  );
}

export default App;
