
import React, { useState } from "react";
import { getUser,getMobile,getEmail } from "../utils/Common";
// require('dotenv').config();
const Donate = () => {
  const [registration, setRegistraion] = useState({
    username: getUser() ,
    email: getEmail(),
    mobile: getMobile(),
    amount: 500,
    currency: "INR",
  });
  const user = getUser();
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log({name, value})
    registration[name] = value;
    setRegistraion({ ...registration });
  };

  //    const handleSubmit =() =>{

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const baseUrl = " https://capstoneeee.herokuapp.com";
    //todo change url
// console.log(process.env.BASE_URL);
    const data = await fetch(baseUrl+"/create/orderId", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: registration.amount * 100,
      }),
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      // image: 'http://localhost:1337/logo.svg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        console.log(response);
      },
      //to do
      prefill: {
        name:registration.username,
        email: registration.email,
        phone_number: JSON.stringify(registration.mobile),
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <React.Fragment>
    <div className="container">
      <div className="card" style={{ width: "65%" }}>
        <div className="panel panel-primary" style={{ margin: "3rem" }}>
          <div className="panel-heading">
            <h3 className="panel-title">Donation Form</h3>
          </div>
          <div className="panel-body">
          
            <form style={{ textAlign: "center" }}>
            
              <div className="row">
                <div className="form-group col-sm-3 col-xs-3">
                  <label htmlFor="name">Name* </label>
                </div>
                <div className="form-group col-sm-1 col-xs-1">
                  <label >: </label>
                </div>
                <div className="form-group col-sm-8 col-xs-8">
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="name"
                    name="username"
                    autoComplete="off"
                    value={registration.username}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3 col-sm-3 col-xs-3">
                  <label htmlFor="email">Email* </label>
                </div>
                <div className="form-group col-md-1 col-sm-1 col-xs-1">
                  <label htmlFor="email">: </label>
                </div>
                <div className="form-group col-md-8 col-sm-8 col-xs-8">
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={registration.email}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3 col-sm-3 col-xs-3">
                  <label htmlFor="mobile">Mobile* </label>
                </div>
                <div className="form-group col-md-1 col-sm-1 col-xs-1">
                  <label htmlFor="mobile">: </label>
                </div>
                <div className="form-group col-md-8 col-sm-8 col-xs-8">
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="mobile"
                    name="mobile"
                    autoComplete="off"
                    value={registration.mobile}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3 col-sm-3 col-xs-3">
                  <label htmlFor="currency">Currency* </label>
                </div>
                <div className="form-group col-md-1 col-sm-1 col-xs-1">
                  <label htmlFor="currency">: </label>
                </div>
                <div className="form-group col-md-8 col-sm-8 col-xs-8">
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="currency"
                    name="currency"
                    autoComplete="off"
                    value={registration.currency}
                    // onChange={handleInput}
                  />
                </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3 col-sm-3 col-xs-3 ">
                    <label htmlFor="amount">Amount* </label>
                  </div>
                  <div className="form-group col-md-1 col-sm-1 col-xs-1 ">
                    <label htmlFor="amount">: </label>
                  </div>
                  <div className="form-group col-md-8 col-sm-8 col-xs-8 ">
                    <input
                      type="number"
                      className="form-control input-sm"
                      id="amount"
                      name="amount"
                      autoComplete="off"
                      value={registration.amount}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              
           
            </form>
           
            <div className="container justify-content-center">
              <input
                type="button"
                className="btn btn-primary"
                value="Pay Now"
                onClick={displayRazorpay}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Donate;

