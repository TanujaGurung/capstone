import React, {useState} from "react";
import { setUserSession } from "../utils/Common";
import axios from "axios";

const SignUp = (props) => {
    const [userRegistration, setUserRegistraion] = useState({
      username: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      role: "ROLE_USER"
    });
    const [err ,setErr] = useState("")
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
     // console.log({name, value})
      userRegistration[name] = value;
      setUserRegistraion({ ...userRegistration });
    };
  
    const handleSubmit = () => {
     // console.log(userRegistration);
      //alert(userRegistration.username)
      axios.post("https://capstoneeee.herokuapp.com/api/auth/signup", userRegistration)
      .then(res =>{
           alert(res);
        // setUserSession(res.data.token, res.data.username)
         props.history.push('/redirect')
          //alert(res.data.username)
      }).catch(err =>{
          
          if(err.response.status === 401 || err.response.status === 400){
            setErr(err.response.data.message);}
              else {
                  setErr("Something went wrong, try again..")
              }
          
          //console.log(err)
        alert(err)
      })
    };
  
    return (
        <React.Fragment>
        <div className="panel panel-primary" style={{ margin: "3rem" }}>
          <div className="panel-heading">
            <h3 className="panel-title">Registration Form</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="col-md-12 col-sm-12">
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="name">Name* </label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="name"
                    name="username"
                    autoComplete="off"
                    value={userRegistration.username}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    className="form-control input-sm"
                    id="email"
                    name="email"
                    value={userRegistration.email}
                    onChange={handleInput}
                  />
                </div>
              </div>
              
              <div className="col-md-12 col-sm-12">
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="name">Password* </label>
                  <input
                    type="password"
                    className="form-control input-sm"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={userRegistration.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="password">Conform Password*</label>
                  <input
                    type="password"
                    className="form-control input-sm"
                    id="password"
                    name="password"
                    value={userRegistration.password}
                    onChange={handleInput}
                  />
                </div>
              
              
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="mobile">Mobile*</label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="mobile"
                    name="mobile"
                    value={userRegistration.mobile}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="address">Address*</label>
                  <textarea
                    className="form-control input-sm"
                    id="address"
                    rows="3"
                    name="address"
                    value={userRegistration.address}
                    onChange={handleInput}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="city">City*</label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="city"
                    name="city"
                    value={userRegistration.city}
                    onChange={handleInput}
                  />
                </div>
  
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="state">State*</label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="state"
                    name="state"
                    value={userRegistration.state}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="country">Country*</label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="country"
                    name="country"
                    value={userRegistration.country}
                    onChange={handleInput}
                  />
                </div>
  
                <div className="form-group col-md-6 col-sm-6">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="pincode"
                    name="pincode"
                    value={userRegistration.pincode}
                    onChange={handleInput}
                  />
                </div>
                </div>
                <div className="col-md-12 col-sm-12">
                <div className="radio">
                  <label class="radio-inline">
                    <input
                      type="radio"
                      checked
                      name="role"
                      value={userRegistration.roles}
                      onChange={handleInput}
                    />
                    Individual
                  </label>
                  <label class="radio-inline">
                    <input
                      type="radio"
                      name="role"
                      value={userRegistration.roles}
                      onChange={handleInput}
                    />
                    Organisation
                  </label>
                </div>
              </div>
              </form>
              <div className="container justify-content-center">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="Submit"
                  onClick={handleSubmit}
                />
              </div>
           
          </div>
        </div>
      </React.Fragment>
    );
  };
  export default SignUp;
  