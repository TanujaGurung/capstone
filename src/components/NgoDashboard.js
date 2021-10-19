import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { getId } from "../utils/Common";
import { history, Link } from "react-router-dom";

const NgoDashboard = (props) => {
  //const [post, setPost] = useState([]);
  const [list, setList] = useState([]);

  const Ngo_id = getId();
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = "http://capstoneeee.herokuapp.com/api/DonationPost";
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setList(resJson.data);
      } catch (err) {
        alert(JSON.stringify(err));
    
      }
    }
    fetchData();
  }, []);
  const handleOrderDetails =() =>{
    
  }
  const handleClick = () => {
    // props.history.push("/mycart")
   
  //   const posts = { 
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
        
    
  //   }  
    
  //     const  apiUrl = "http://capstoneeee.herokuapp.com/api/order/" + Ngo_id;
  //     fetch(apiUrl, posts)
  //     .then(res => {
  //       console.log(res);
  //      alert(res)
  //     })
    
   };

  // useEffect(() => {
  //     const fetchData= async ()=>{
  //         try {
  //             const result = await axios.get("http://capstoneeee.herokuapp.com/api/DonationPost")
  //             setPost(JSON.stringify(result.data.data));
  //              alert(JSON.stringify(result.data.data))
  //             console.log(post)
  //         }catch(err){
  //             alert(err.message);
  //         }
  //     }
  //     fetchData();
  //  }, [])
  return (
    <React.Fragment>
      
     
        <div class="fixed-top">
          <button
            className="btn btn-lg btn-primary btn-block btn-signin"
            onClick={handleClick}
          >
            <Link to="/mycart" style={{textDecoration:"none",color:"black"}}>Go to Cart </Link>
          </button>
          <br></br>
          
          <h4 style={{textAlign:"center"}}> Clothes available</h4>
          
        </div>
        <div className="row">
          {list.map((item) => (
            <div className="col-sm-3">
              {" "}
              <PostCard
                key={item._id}
                id={item._id}
                img={item.img}
                title={item.title}
                description={item.description}
                postedBy={item.postedBy}
              />
            </div>
          ))}
        </div>
        <button
        className="btn btn-lg btn-primary btn-block btn-signin" type="submit"
        onClick={handleOrderDetails}
      >
        <Link to="/myorders" style={{textDecoration:"none",color:"black"}}>My Orders </Link>
      </button>
    
    </React.Fragment>
  );
};
export default NgoDashboard;
