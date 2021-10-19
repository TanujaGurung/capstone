import React,{useState} from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
//import Card from './components/Card'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DetailLinks from "./components/DetailLinks"

import ContactUs from './components/ContactUs';
import Dashboard from "./components/Dashboard";

import Footer from  "./components/Footer";
import { getUser } from './utils/Common';
import CartCard from "./components/CartCard"

//import Footer from './components/Footer';

function App() {
  // const [loggedIn , setloggedIn] =useState(getUser())
  
  return (
    <React.Fragment>
    
    <BrowserRouter>
    <Navbar  />
    <Route exact path='/' component={Home}></Route>
    <Route path='/aboutus' component={AboutUs}></Route>
    <Route path='/contactus' component={ContactUs}></Route>
    <Route path='/signin' component={SignIn}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/detail' component={DetailLinks}></Route>
    <Route path='/mycart' component={CartCard}></Route>
    
    <Route path='/signup' component={SignUp}></Route>
       <Footer />
    </BrowserRouter>

    
   
    </React.Fragment>
  );
}

export default App;
