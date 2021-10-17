import React ,{useState,useEffect}  from "react";
import {Link} from "react-router-dom";
import {setUserSession} from "../utils/Common"


import axios from "axios";

import  "./styles.css";

const SignIn =(props) =>{
    const [user , setUser] = useState('');
    const [pswd , setPswd] =useState('');
    const [err, setErr] = useState(null);
    const [loading , setLoading]= useState(false);

  const handleLogin =( ) =>{
     // props.history.push("/")
     setErr(null);
     setLoading(true);
     axios.post("http://capstoneeee.herokuapp.com/api/auth/signin", {email: user, password : pswd})
        .then(res =>{
           setLoading(false);
           setUserSession(res.data.token, res.data.username)
           props.history.push('/dashboard')
            //alert(res.data.username)
        }).catch(err =>{
            setLoading(false);
            if(err.response.status === 401 || err.response.status === 400){
              setErr(err.response.data.message);}
                else {
                    setErr("user or password is wrong..kindly try again..")
                }
            
            //console.log(err)
          //alert(err)
        })
 
    }    
 
    return(
        <React.Fragment className ="body">
        <div className="container">
        <div className="card card-container">
            
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus autoComplete ="off" value = {user} onChange= {e =>setUser(e.target.value)} />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required  value = {pswd}  onChange= {e =>setPswd(e.target.value)}/>
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                
            </form>
            {err && <div className="error" >{err}</div>}
            <button  className="btn btn-lg btn-primary btn-block btn-signin"  onClick={handleLogin}>Sign in</button>
            
     <p> Don't have account then <Link to = "/signup" className="forgot-password">
                sign up
            </Link> </p> 
        </div>
    </div>
    </React.Fragment>
    )
}
export default SignIn;