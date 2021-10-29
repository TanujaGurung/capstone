import React from "react";
import { removeUserSession } from "../utils/Common";
import { Link } from "react-router-dom";

const NgoNavbar =() =>
{
  const logout = () => {
    return removeUserSession();
  };
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
                    <Link to="/mycart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/orders">Your Orders</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={logout}>
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
export default NgoNavbar