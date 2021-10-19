import React,{useState,useEffect} from "react";
import {  Card ,ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { getId } from "../utils/Common";

const PostCard=(props) =>{
   const {id , title, description, postedBy ,img} = props
   const [user , setUser] =useState('');
   const Ngo_id = getId();
   //console.log(id);
  
   const handleChange =() =>{
       const feed ={
           postId : id
       }
       console.log(feed);
    const posts = { 
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
           body: JSON.stringify(feed)
      
      }  
      if(id !== null){
        const  apiUrl = " http://capstoneeee.herokuapp.com/api/addCart/" + Ngo_id;
        fetch(apiUrl, posts)
        .then(res => {
          console.log(res);
         // alert(JSON.stringify(res.data))
         alert("selected Item is added to your cart")
        }).catch(err =>{
            alert(err);
        })
      
     

    }


   }
   useEffect(() => {
    async function fetchData() {
      
        try {
            const requestUrl = 'http://capstoneeee.herokuapp.com/api/user/' + postedBy;
            const res = await fetch(requestUrl);
            const resJson = await res.json();
            setUser(resJson.data.username);
        } catch (err) {
            alert(JSON.stringify(err));
            alert(err);
        }
    }
    fetchData();
}, []);
    return(
        <div>
        <Card style={{ width: '95%',height : "500px" }}>
  <Card.Body>
  <Card.Img variant="top" src={img} alt ="myimg" style={{ width: '100%', height : "300px" }}/>
    <Card.Title>{title}</Card.Title>
    
    <Card.Text style={{ width: '95%', whiteSpace :"nowrap",
      overflow: 'hidden',
      textOverflow: 'ellipsis'}}>
      description :{description}
    </Card.Text>
    <Card.Text>
    postedBy : {user}
    </Card.Text>
    
  

    <Card.Link><button  className="btn btn-lg btn-primary btn-block btn-signin" type="submit"  onClick={handleChange}>Interested</button></Card.Link>
    
  </Card.Body>
</Card>
        </div>
    )
}
export default PostCard;