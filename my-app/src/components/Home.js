import React from "react";
import HomeCard from "./HomeCard";
import Caurosel from "./Caurosel";
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"



//import { CardGroup } from 'react-bootstrap';

 const Home =() =>{
     const posts =  [
        { img: img4, title: "Child Colthing" ,link :"chid", para:"Children are the future of a nation. They are the best change agents, be it in the family or the community in which they live. It is therefore crucial to catch them young and inculcate in them feelings of empathy and conscience so that they grow up as responsible individuals."},
        { img: img5, title: "Women Clothing" , link :"women",para:"Women are special for many reasons. They are the most sensitive, caring and maternal people in the world.Women are special because they love to accomplish things and they love to work together to get what they want. Women have come so far in this world and that is what makes them so special." },
        { img: img6, title: "Educational books", link :"education", para:"Education certainly determines the quality of an individual's life. Education improves one's knowledge, skills and develops the personality and attitude. Most noteworthy, Education affects the chances of employment for people. A highly educated individual is probably very likely to get a good job." },
        { img: img7, title: "Mens Clothing", link :"mens", para:"Man is a social animal not only by nature but also by necessity. ... Out of these different needs social, mental and physical needs are very important and needs fulfillment. He can't fulfill these needs without living in society. All his needs and necessities compel him to live in society." }
      ];
       
    return(
        <React.Fragment>
        <div className="container-fluid">
        <Caurosel />
        <br></br><br></br>
        <div  className="container-fluid">
        <h2>Hopes accepts all gently used clothes that are in decent and usable condition.</h2>
        <p>Nothing makes decluttering easier than knowing your clothes are going to a worthy cause — or at the very least, not going to the dump. Consider this: Around 11 million tons of textile waste ends up in landfills each year. And your old jeans and tees don't have a short stay there either. Depending on the material, it could take them anywhere from several weeks to several decades to break down, releasing methane, a greenhouse gas more potent than carbon dioxide, in the process. Fortunately, there are simple ways you can donate your clothes to save the planet, and at the same time, help those in need.</p>
        <h1>Donate your clothes and give them a second life</h1>
        </div>
        <div className="container-fluid">
        <div class="row">
  
  {posts.map((item) => (
    <div className="col-sm-3">  <HomeCard key={item.img} img ={item.img} title ={item.title} link ={item.link} para={item.para} /></div>
  ))}
  
 
  
 
</div>
        </div>
        </div>
        </React.Fragment>
    )
}
export default Home;