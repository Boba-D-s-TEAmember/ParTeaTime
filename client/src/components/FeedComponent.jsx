import React from "react";

const FeedComponent = (props) => {
  let { title, caption, image, date } = props.data;
  return (
    <div className="container py-5">
      <div className="row justify-content-md-center feed-view">
        <div className="col-md-auto">
          <h1 className="justify-content-md-center badge-info shadow">
            {title}
          </h1>
          <h3>{caption}</h3>
        </div>

        <div className="col-md-auto">
          <img className="img-thumbnail shadow" src={image}></img>
        </div>
      </div>
    </div>
  );
};

export default FeedComponent;
