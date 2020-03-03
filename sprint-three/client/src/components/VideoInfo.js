import React from "react";
import ViewIcon from "../Assets/Icons/SVG/Icon-views.svg";
import LikeIcon from "../Assets/Icons/SVG/Icon-likes.svg";

export default function Video(props) {
  console.log("abcde");

  let g = props.mainVideo[0].timestamp;
  let d = new Date(g);
  let commentDate = d.getUTCDate();
  let commentMonth = d.getUTCMonth();
  let commentYear = d.getUTCFullYear();
  g = `${commentDate}/ ${commentMonth}/ ${commentYear}`;
  return (
    <>
      <div className="videoinfo">
        <h1 className="videoinfo__title" key>
          {props.mainVideo[0].title}
        </h1>
        <div className="videoinfo__content">
          <div className="videoinfo__info">
            <h3 className="videoinfo__channel">
              By {props.mainVideo[0].channel}
            </h3>
            <h3 className="videoinfo__date">{g}</h3>
          </div>
          <div className="videoinfo__logistic">
            <img
              className="videoinfo__icon--view"
              src={ViewIcon}
              alt="viewicon"
            />
            <h4 className="videoinfo__icon--viewcount">
              {props.mainVideo[0].views}
            </h4>
            <img
              className="videoinfo__icon--like"
              src={LikeIcon}
              alt="likeicon"
            />
            <h4 className="videoinfo__icon--likecount">
              {props.mainVideo[0].likes}
            </h4>
          </div>
        </div>
        <div>
          <p className="videoinfo__description">
            {props.mainVideo[0].description}
          </p>
        </div>
      </div>
    </>
  );
}
