import React from "react";
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import { Link } from "react-router-dom";


const AboutUs =() =>{
    return(
        <div className ="container">
       <div className ="container-fluid">
       <h1 style={{ color: "blue" }}> WHAT WE DO?</h1>
       <hr/>
       <p style={{ fontWeight: "bold",fontSize:"25px" }}>Today, the textile industry is one of the most polluting industries in the world and in India, it is the third-largest source of waste after plastic, paper and compost. Large textile hubs in the country can produce up to 45,000 meters of fabric waste on a daily basis.</p>
      <br/>
       <p className="text-justify" style={{fontSize:"25px" }}>Just imagine we as an Individuals produce how much of waste when we throw away clothes.Many a times we tend to throw clothes which doesn't fit us or its out of trend or fashion.
       Apart from that many people who are deseased their clothes are tend to be thrown when still they can be used,but due to many other reasons people tend to throw it away.Apart from that kids who are growing fast, their small clothes can be donated to the orphanage where kids are not so fortunate. 
       </p>
       <p className="text-justify" style={{ fontWeight: "bold",fontSize:"25px" }}>Now are you thinking who has time to search a homes/orphanage to donate my clothes?</p>
       <p className="text-justify" style={{ fontWeight: "bold",fontSize:"25px" }}>Or are you thinking great if your clothes can be reused by someone?</p>
       <p className="text-justify" style={{ fontWeight: "bold",fontSize:"25px" }}>Or are you thinking how can I manage to pack and carry the clothes towards the needy?</p>
        <br/>
        <p className="text-justify" style={{ fontSize:"25px" }}>That's why we are here</p>
        <p className="text-justify" style={{ fontSize:"25px" }}> We create a platform for both the individual who are willing to donate and the non profit organisation</p>
        <p className="text-justify" style={{ fontSize:"25px" }}>If you are an individual who has clothes which can be used for the better cause or you just want to donate fund then signup in our site.</p>
        <p className="text-justify" style={{fontSize:"25px" }}>If you are an organisation who is looking for clothes and donation then signup as an organisation in our signup page.</p>
           <br/>
           <p className="text-justify" style={{ fontWeight: "bold",fontSize:"25px" }}> How does this work?</p> 
           <p className="text-justify" style={{fontSize:"25px" }}>The individual can upload their clothes images with clear description about it and the organisation can able to see the avaialable clothes for donation.If they are intererested they can order it.
             An deliver agent from our end will transit the product from source to the destination.
           </p> 
       <br/>
       <hr/>
       <h1 style={{ color: "blue" }}> PEOPLE BEHIND HOPES</h1>
       <hr/>
       <p className ="text-justify" style={{fontSize:"25px"}}>Hopes Foundation is managed by a Board of Trustees, who are supported by an Advisory Panel comprising of individuals from diverse backgrounds and expertise, and a Management Team which comprises of experienced professionals working with Hopes Foundation.</p>
       <hr/>
       <br/>
       <br/>
       <div className="container">
    <div className="row">
        <div className="col-md-8">
        <br/>
            <h2 className="featurette-heading">Mr. Vinod </h2>
            <p className="lead text-justify">Mr.Vinod holds a batcherlor in mechanic.He is passionate web developer. </p>
        </div>
        
        <div className="col-md-4">
            <img className="img-responsive" src={img8} alt="" style={{width: '60%' , height : "50%"}} />
             
        </div>
    </div>
    <br></br>
    <br></br>
    <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-5 order-md-1">
            <img className="img-responsive" src={img9} alt style={{width: '60%' , height : "50%"}} />
             
        </div>
        
        <div className="col-md-7 order-md-2">
        <br/><br/><br/>
            <h2 className="featurette-heading">Mrs. Tanuja Gurung </h2>
            <p className="lead text-justify">She is batcherlor passout in electronics and communication.She is a passionate web developer</p>
        </div>
    </div>
    
        <br></br>
    <hr/>
    
       </div>
       <h3 style={{ color: "blue" , textAlign : "center"}} > <Link to ="/signin" style={{ color: "blue", textDecoration:"none"}}>GET INVOLVED TO US </Link></h3>
       </div>
      
       
       <hr/>
       </div>  
    )
}
export default AboutUs;