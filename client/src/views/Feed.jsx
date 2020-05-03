import React from "react";
import { useState } from "react";
import FeedComponent from "../components/FeedComponent";
import axios from "axios";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
      axios.get("/posts/").then(response=>{
          console.log(response.data); 
          this.setState({posts:response.data})
      })
      .catch( err=>{
          console.log(err)
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <h1>This is about us</h1>
            {
                this.state.posts.map(post=>{
                   return <FeedComponent key={post._id} data={post} />
                })
            }
           
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
