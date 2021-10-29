
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getId } from "../utils/Common";
import { ListGroup } from "react-bootstrap";

export default function OrderDetails(props) {
  const [order, setOrder] = useState([]);
  const Ngo_id = getId();
  console.log("ngo id " + Ngo_id)
  useEffect(() => {
    async function fetchOrder() {
      try {
        const requestUrl =
          "https://capstoneeee.herokuapp.com/api/order/" + Ngo_id;
        const res = await fetch(requestUrl);
        const resJson = await res.json();
       // alert(order);
      
       setOrder(resJson.data);
      //  setOrder(resJson.data[0].orderItems);
        //alert(order);
      } catch (err) {
        console.log(JSON.stringify(err));
      //  alert(err);
      }
    }

    fetchOrder();
  }, []);

  
  
  return (
    <div className="container" >
    <h1> Your orders </h1>
    
  
     {  order.map((list) =>((list.orderItems.map(item =>(
      <div className="card" style={{ width: "60%" },{height : "40%"}}>
      <div className="conatiner" style={{ width: "70%" }, {textAlign: "center"}}>
      <div class="row featurette d-flex justify-content-center align-items-center">
       
        <div class="col-md-4 order-md-1">
          <img
            className="img-responsive"
            src={item.img}
            alt=""
            style={({ width: "150px" }, { height: "150px" })}
          />
        </div>

        <div className="col-md-4 order-md-1">
          <h4 className="featurette-heading"> {item.title}</h4>
          <p className="lead">{item.description}</p>
          
        </div>
        <div className="col-md-3 order-md-1">
          <h4 className="featurette-heading"> ordered</h4>
          <p className="lead">on {item.addedAt .substring(0, 10)}</p>
          
        </div>
        </div>
      <hr />
      </div>
    </div>
     )))))

     }
     </div>

      // {order.length !== 0 ? (
      //   <div> </div>
      // ) : (
      //   <div>
      //     <h1>you haven't ordered yet!!!</h1>
      //   </div>
      // )}
      
  );
}

