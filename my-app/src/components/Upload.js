import React, { Component } from 'react'
import axios from 'axios';
import { removeUserSession, getUser,getToken,getMobile,getAddress,getId} from "../utils/Common";

export default class Upload extends Component {
    constructor(props) {
        super(props)
        const user = getUser();
    const mobile = getMobile();
    const address = getAddress();
    const id = getId();

        this.state = {
            title: "",
             img: "",
            description : "",
            phone : mobile,
            address : address,
            id: id,
            img: ""
       
            
        }
        this.ChangeHandler = this.ChangeHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }
    ChangeHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    SubmitHandler = (e) => {

        e.preventDefault();
        const feed = {
            title: this.state.title,
            description: this.state.description,
            address :this.state.address,
            phone: this.state.phone,
            img : this.state.img
            
        }
        const posts = { 
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
               body: JSON.stringify(feed)
          
          }  
          if(this.state.title && this.state.img && this.state.description){
            const  apiUrl = "http://capstoneeee.herokuapp.com/api/DonationPost/" + this.state.id;
            fetch(apiUrl, posts)
            .then(res => {
              console.log(res);
             alert("uploaded succesfully")
            })
          }
         

        }

    render() {
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <div >
                        <label className = "bg-info"><h3>title:</h3></label>&nbsp;&nbsp;
                        <input type="text" name="title" value={this.state.title} onChange={this.ChangeHandler}></input>
                    </div>
                    <div >
                    <label className = "bg-info"><h3>description:</h3></label>&nbsp;&nbsp;
                    <input type="text" name="description" value={this.state.description} onChange={this.ChangeHandler}></input>
                </div>
                
                
                <div >
                    <label className = "bg-info"><h3>Image-Url:</h3></label>&nbsp;&nbsp;
                    <input type="text" name="img" value={this.state.img} onChange={this.ChangeHandler}></input>
                </div>
                    <button type="submit" >Submit</button>

                </form>
            </div>
        )
    }
}
