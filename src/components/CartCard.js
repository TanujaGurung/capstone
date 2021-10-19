import React, { useState, useEffect } from "react";
import axios from "axios";
import { getId } from "../utils/Common";
import { ListGroup } from "react-bootstrap";

export default function Cartcard(props) {
  const [cart, setCart] = useState([]);
  const Ngo_id = getId();
  useEffect(() => {
    async function fetchCart() {
      try {
        const requestUrl =
          "http://capstoneeee.herokuapp.com/api/Cart/" + Ngo_id;
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setCart(resJson.data.cart);
        console.table(cart);
      } catch (err) {
        alert(JSON.stringify(err));
        alert(err);
      }
    }

    fetchCart();
  }, []);

  async function remove_item(id) {
    const feed = {
      postId: id,
    };
    console.log(id);
    try {
      const res = await fetch(
        "http://capstoneeee.herokuapp.com/api/removeCart/" + Ngo_id,
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feed),
        }
      );
      const resJson = await res.json();
      alert("Item succesfully deleted from your cart")
      setCart(resJson.data.cart);
      
    } catch (err) {
      console.log(err);
    }
  }
  async function handleOrder() {
    try {
      const res = await fetch(
        "http://capstoneeee.herokuapp.com/api/order/" + Ngo_id,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await res.json();
     //alert(JSON.stringify(resJson))
     alert("Order successfully placed")
    } catch (err) {
      console.log(err);
    }
   
  }
  return (
    <div className="container">
      {cart.length !== 0 ? (
        cart.map((item) => (
          <div className="conatiner">
            <div class="row featurette d-flex justify-content-center align-items-center">
              <div class="col-md-1 order-md-1"></div>
              <div class="col-md-4 order-md-1">
                <img
                  class="img-responsive"
                  src={item.img}
                  alt=""
                  style={({ width: "150px" }, { height: "150px" })}
                />
              </div>

              <div class="col-md-7 order-md-1">
                <h2 class="featurette-heading"> {item.title}</h2>
                <p class="lead">{item.description}</p>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={() => remove_item(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div>
          <h1>Add to your cart</h1>
        </div>
      )}

      {cart.length !== 0 ? (
        <button
          className="btn btn-lg btn-primary btn-block btn-signin"
          type="submit"
          onClick={handleOrder}
        >
          Accept
        </button>
      ) : (
        <div>
          <h1>your cart is empty</h1>
        </div>
      )}
    </div>
  );
}
