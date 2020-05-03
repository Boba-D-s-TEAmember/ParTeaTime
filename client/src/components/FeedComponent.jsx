import React from "react";

const FeedComponent = (props) => {
  let { title, caption, image, date } = props.data;
  return (
    <div className="container py-5 ">
      <div className="row border-bottom justify-content-md-center feed-view">
        <div className="col-md-auto">
          <h1 className="justify-content-md-center m-4 px-2 rounded badge-info shadow">
            {title}
          </h1>
          <h3 className="text-monospace m-4">{caption}</h3>
        </div>

        <div className="col-md-auto">
          <img className="img-thumbnail m-4 shadow" src={image}></img>
        </div>
      </div>
    </div>
  );
};

export default FeedComponent;
