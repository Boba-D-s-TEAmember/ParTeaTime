import React from "react";
import axios from "axios";

class MakePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      caption: "",
      image: [],
      loading: false,
    };
  }

  setTitle(e) {
    this.setState({ title: e });
  }

  setCaption(e) {
    this.setState({ caption: e });
  }

  setImage(e) {
    const temp = e;
    this.setState({
      image: temp,
    });

    console.log(this.state.image);
  }

  createPost() {
    let data = new FormData();
     
     data.append("title", this.state.title.toString());
      data.append("caption",this.state.caption.toString()) 
     data.append("image",this.state.image[0]); 
    
    console.log(data)

    axios
      .post("/posts/", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }

  render() {
    return (
      <div className="container">
          <div className="row justify-content-md-center">
              <div className="col">
                <h1>Create A post</h1>
              </div>

          </div>
        <div className="input-group py-2">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            placeholder="Title..."
            className="form-control"
            aria-label="With textarea"
            onChange={(e) => this.setTitle(e.target.value)}
          ></input>
        </div>

        <div className="input-group">
          <div className="input-group-prepend"></div>
          <textarea
            placeholder="Caption..."
            className="form-control"
            aria-label="With textarea"
            onChange={(e) => this.setCaption(e.target.value)}
          ></textarea>
        </div>
        <input
          onChange={(e) => this.setImage(e.target.files)}
          type="file"
          placeholder="Upload Image"
        />
        <button onClick={()=> this.createPost()} className="btn btn-info my-3 px-5">MakePost</button>
      </div>
    );
  }
}

export default MakePost;
