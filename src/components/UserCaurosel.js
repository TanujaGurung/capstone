
import React from "react";
import img11 from "../images/img11.jpg"
import img12 from "../images/img12.jpg"
import img13 from "../images/img13.jpg"

const UserCaurosel =() =>{
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
              <img className="img-responsive" src ={img11} alt="teaching" style={{width: '100%' }}/>
              
            </div>
      
            <div className="item">
              <img className="img-responsive" src ={img12} alt="aged" style={{width: '100%'}}/>
              
            </div>
          
            <div className="item">
              <img className="img-responsive" src ={img13} alt="smilies" style={{width: '100%'}} />
              
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

export default UserCaurosel;