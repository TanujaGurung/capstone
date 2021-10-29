import React, { Component } from "react";
// import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRoles, getId, getUser, removeUserSession } from "../utils/Common";
import UserNavbar from "./UserNavbar";
import NgoNavbar from "./NgoNavbar";


export default class ClassNavbar extends Component {
  constructor(props) {
    super(props);
    // const user = getUser();
    
    const id = getId();

    this.state = {
     
     user : {},
      id: id,
    };
    // this.ChangeHandler = this.ChangeHandler.bind(this);
    // this.SubmitHandler = this.SubmitHandler.bind(this);
  }
  componentDidMount() {
      this.setState(user => this.state.getUser())
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" onSubmit={this.SubmitHandler}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.ChangeHandler}
            />
            <Form.Text className="text-muted">
              kindly enter a valid title for your clothe
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              name="img"
              type="text"
              placeholder="img url"
              value={this.state.img}
              onChange={this.ChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="description"
              value={this.state.description}
              onChange={this.ChangeHandler}
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit" onClick={this.SubmitHandler}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}
