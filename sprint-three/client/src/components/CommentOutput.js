import React from "react";

export default function CommentOutput(props) {
  console.log(props, "efgh");
  const mainVideoComments = props.mainVideo[0].comments;
  let commentElements = mainVideoComments.map((commentinfo, index) => {
    return (
      <>
        <div key={commentinfo.id} className="commentoutput">
          <div className="commentoutput__userinfo">
            <div className="commentoutput__userinfo--propic"></div>
            <h2 className="commentoutput__userinfo--name">
              {commentinfo.name}
            </h2>
            <h2 key={index} className="commentoutput__userinfo--date">
              {commentinfo.date}
            </h2>
          </div>
          <p key={index} className="commentoutput__comment">
            {commentinfo.comment}
          </p>
        </div>
      </>
    );
  });

  return <div>{commentElements}</div>;
}
