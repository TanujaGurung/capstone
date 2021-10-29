
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
// import axios from "axios";
import { getId } from "../utils/Common";
import {
  // history,
  Link
} from "react-router-dom";

const NgoDashboard = (props) => {
  //const [post, setPost] = useState([]);
  const [list, setList] = useState([]);

  // const Ngo_id = getId();
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = "https://capstoneeee.herokuapp.com/api/DonationPost";
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setList(resJson.data);
      } catch (err) {
      //  alert(JSON.stringify(err));
    
      }
    }
    fetchData();
  }, []);
 
  return (
    <React.Fragment>
      
     
        <div className="fixedTop"> 
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
        
    
    </React.Fragment>
  );
};
export default NgoDashboard;