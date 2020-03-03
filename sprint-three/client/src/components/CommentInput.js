import React, { Component } from "react";
import propic from "../Assets/Images/Mohan-muruge.jpg";

export default class comment_input extends Component {
  render() {
    return (
      <>
        <div className="commentinput">
          <h2 className="commentinput__commentquantity">3 Comments</h2>
          <h3 className="commentinput__title">Join The Conversation</h3>
          <div className="commentinput__inputinfo">
            <div className="commentinput__content">
              <img
                className="commentinput__profilepic"
                src={propic}
                alt="propic"
              />
              <input
                className="commentinput__input"
                type="text"
                name="commentInput"
                placeholder="Comment here"
              />
            </div>
            <button className="commentinput__button">Comment</button>
          </div>
        </div>
      </>
    );
  }
}
