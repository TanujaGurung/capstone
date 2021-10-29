import React from "react";
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import { Link } from "react-router-dom";


const AboutUs =() =>{
    return(
        <React.Fragment>
       <div className ="container-fluid">
       <h1 style={{ color: "blue" }}> PEOPLE BEHIND HOPES</h1>
       <hr/>
       <p className ="text-justify" style={{fontSize:"25px"}}>Hopes Foundation is managed by a Board of Trustees, who are supported by an Advisory Panel comprising of individuals from diverse backgrounds and expertise, and a Management Team which comprises of experienced professionals working with Hopes Foundation.</p>
       <hr/>
       <br/>
       <br/>
       <div className="container">
    <div className="row">
        <div className="col-md-7">
            <h2 className="featurette-heading">Mr. Santanu Mishra </h2>
            <p className="lead text-justify">An associate member of ICSI (Institute of Company Secretaries of India) and an alumni of Indian Institute of Management, Ahmedabad (IIM-A). A law graduate, Mr. Mishra specialises in enterprise transformation, strategies and scaling up. Mr. Mishra has been the Executive Trustee of Smile Foundation since 2005 and has actively led the structuring and scaling up of the organization.</p>
        </div>
        
        <div className="col-md-5">
            <img className="img-responsive" src={img8} alt="" style={{width: '400px' , height : "250px"}} />
             
        </div>
    </div>
    <br></br>
    <br></br>
    <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-5 order-md-1">
            <img className="img-responsive" src={img9} alt style={{width: '400px' , height : "250px"}} />
             
        </div>
        
        <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Mr. Manish Kumar </h2>
            <p className="lead text-justify">A Chartered Accountant, Cost and Management Accountant and a Company Secretary. As an Investor and a Philanthropist he has multidimensional exposure spread across various sectors in India and abroad. He has been associated with various charitable organizations and social causes aimed at alleviating various social malaise and bridging the gap or disparity in the society through various initiatives on education, healthcare, livelihood and capacity building since last two decade.</p>
        </div>
    </div>
    
        <br></br>
        
    
    <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
            <h2 className="featurette-heading">Mr. Nesar Ahmad</h2>
            <p className="lead">A fellow member of ICSI (Institute of Company Secretaries of India). He specialises in company secretarial services, corporate laws, business re-structuring, merger & amalgamation, merchant banking and legal matters. He is former President of the ICSI.</p>
        </div>
        <div className="col-md-5">
            <img className="img-responsive" src={img10} alt="" style={{width: '400px' , height : "250px"}}/>
             
        </div>
        </div>
    
    
       </div>
       <h3 > <Link to ="/signin" style={{ color: "blue", textDecoration:"none"}}>GET INVOLVED TO US </Link></h3>
       </div>
      
       
       <hr/>
       </React.Fragment>  
    )
}
export default AboutUs;