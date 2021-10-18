import React from "react";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"

const Caurosel =() =>{
    return(
        <div>
        <div className="container-fluid">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        { /*  Indicators */ }
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
         { /* Wrapper for slides */ }
          <div className="carousel-inner">
      
            <div className="item active">
              <img src ={img1} alt="nepal"  style={{width: '100%'},{height: '50%'}}/>
              <div className="carousel-caption">
                <h2>Nepal</h2>
                <p>My origin</p>
              </div>
            </div>
      
            <div className="item">
              <img src ={img2} alt="hyderabad" />
              <div className="carousel-caption">
                <h2>Hyderabad</h2>
                <p>My Hometown</p>
              </div>
            </div>
          
            <div className="item">
              <img src ={img3} alt="coonoor" style={{width: '100%'}} />
              <div className="carousel-caption">
                <h2>Coonoor</h2>
                <p>Currently residing</p>
              </div>
            </div>
        
          </div>
      
          { /* Left and right controls */ }
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
     
    </div>
        </div>
    )
}
export default Caurosel;