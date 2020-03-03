import React from "react";
import randompic from "../Assets/Images/video-list-8.jpg";
import axios from "axios";

const url = "/api/videolist/";

const UploadVideo = () => {
  const handleFormSubmit = event => {
    event.preventDefault();

    axios
      .post(url, {
        title: event.target.title.value,
        description: event.target.description.value,
        image: randompic
      })
      .then(videoContent => {
        this.setState({
          allVideos: videoContent.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    event.target.reset();
  };
  console.log("its okay");
  return (
    <>
      <form onSumbit={handleFormSubmit} className="uploadvideo">
        <h1 className="uploadvideo__title">Upload Video</h1>
        <div className="uploadvideo__content">
          <div className="uploadvideo__videocontent">
            <h2 className="uploadvideo__subtitle">VIDEO THUMBNAIL</h2>

            <img
              className="uploadvideo__video"
              src={randompic}
              alt="doesntmatter"
            />
          </div>
          <div className="uploadvideo__contentinput">
            <h2 className="uploadvideo__video--title">TITLE YOUR VIDEO</h2>
            <input
              className="uploadvideo__video--titleinput"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            ></input>
            <h2 className="uploadvideo__video--description">
              ADD A VIDEO DESCRIPTION
            </h2>
            <input
              className="uploadvideo__video--descriptioninput"
              type="text"
              name="description"
              placeholder="Add a description of your video"
            ></input>
          </div>
        </div>
        <div className="uploadvideo__function">
          <button type="submit" className="uploadvideo__function--inputbutton">
            PUBLISH
          </button>
          <button className="uploadvideo__function--cancelbutton">
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
};

export default UploadVideo;
