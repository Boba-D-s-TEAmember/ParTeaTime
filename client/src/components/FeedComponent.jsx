import React from 'react'; 


const FeedComponent=(props)=>{
    let {title,caption,image,date} = props.data
    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                <h1>{title}</h1>
                <h3>{caption}</h3>
                <img src={image}></img>
                </div>

            </div>
                
        </div>
    )
}

export default FeedComponent; 