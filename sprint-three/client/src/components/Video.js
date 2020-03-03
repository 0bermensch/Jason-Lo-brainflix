import React from "react";
import video from "../Assets/Video/BrainStation Sample Video.mp4";
import playbutton from "../Assets/Icons/SVG/Icon-play.svg";
import scrubber from "../Assets/Icons/SVG/Icon-scrubber-control.svg";
import fullscreen from "../Assets/Icons/SVG/Icon-fullscreen.svg";
import volume from "../Assets/Icons/SVG/Icon-volume.svg";

export default function Video(props) {
  console.log(props);
  return (
    <>
      <div className="video">
        <img
          className="video__video"
          src={props.mainVideo[0].image}
          alt="video"
        />
        <div className="video__function">
          <button
            className="video__function--play"
            type="button"
            src={playbutton}
          ></button>
          <div className="video__function--scrubberbar" src={scrubber}></div>
          <div className="video__function--sub">
            <button
              className="video__function--fullscreen"
              src={fullscreen}
            ></button>
            <button className="video__function--mute" src={volume}></button>
          </div>
        </div>
      </div>
    </>
  );
}
