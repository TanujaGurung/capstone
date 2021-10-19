import React, { Component } from 'react'
import axios from 'axios';
import { removeUserSession, getUser,getToken,getMobile,getAddress,getId} from "../utils/Common";
import { Form,Button } from 'react-bootstrap';

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
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    SubmitHandler = (e) => {

       
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
              //console.log(res);
             alert("Thanks for your contribution")
            })
          }
         

        }

    render() {
        return (
            <React.Fragment>
               
                <Form>
  <Form.Group className="mb-3" onSubmit={this.SubmitHandler}>
    <Form.Label>Title</Form.Label>
    <Form.Control name="title" type="text" placeholder="Enter title" value={this.state.title} onChange={this.ChangeHandler}/>
    <Form.Text className="text-muted">
      kindly enter a valid title for your clothe
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Image Url</Form.Label>
    <Form.Control name ="img" type="text" placeholder="img url" value={this.state.img} onChange={this.ChangeHandler}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="text" placeholder="description" value={this.state.description} onChange={this.ChangeHandler} />
  </Form.Group>
  <br></br>
  <Button variant="primary" type="submit" onClick={this.SubmitHandler}>
    Submit
  </Button>
</Form>
            </React.Fragment>
        )
    }
}
