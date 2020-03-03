import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function MoreVideos(props) {
  let videoElements = props.moreVideoArray.map((videos, index) => {
    return (
      <>
        <Link to={"/videos/" + videos.id}>
          <div key={index} className="morevideos">
            <img
              className="morevideos__image"
              src={videos.image}
              alt="videoimage"
            />
            <div className="morevideos__content">
              <h3 key={index} className="morevideos__content--title">
                {videos.title}
              </h3>
              <h3 key={index} className="morevideos__content--channel">
                {videos.channel}
              </h3>
            </div>
          </div>
        </Link>
      </>
    );
  });

  return (
    <div>
      <h2 className="morevideos__nextvideo">NEXT VIDEO</h2>
      <div>{videoElements}</div>
    </div>
  );
}
