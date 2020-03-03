import React, { Component } from "react";
import Video from "./Video";
import VideoInfo from "./VideoInfo";
import CommentInput from "./CommentInput";
import CommentOutput from "./CommentOutput";
import MoreVideos from "./MoreVideos";
import axios from "axios";

const url = "/api/videolist";

class Home extends Component {
  // videos = <p>loading videos...</p>;
  // if (props.state.moreVideoArray !== undefined) {
  //   videos = <p>done loading videos...</p>;
  state = {
    commentArray: [],
    moreVideoArray: [],
    allVideos: [],
    mainVideo: {}
  };

  componentDidMount() {
    console.log("home comp mounted");
    axios.get(url).then(videoContent => {
      console.log("videoContent", videoContent);

      axios.get(`${url}/1af0jruup5gu`).then(mainVideoContent => {
        const takeOutVideo = videoContent.data.filter(
          Video => Video.id !== "1af0jruup5gu"
        );

        console.log(mainVideoContent);

        this.setState({
          mainVideo: mainVideoContent.data,
          moreVideoArray: takeOutVideo,
          allVideos: videoContent.data
        });
      });
    });
  }

  render() {
    if (this.state.moreVideoArray.length === 0) return <h1>Now Loading...</h1>;
    console.log("hi");
    return (
      <>
        <Video mainVideo={this.state.mainVideo} />
        <div className="content">
          <div className="videoinfoandcomments">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <CommentInput />
            <CommentOutput mainVideo={this.state.mainVideo} />
          </div>
          <MoreVideos moreVideoArray={this.state.moreVideoArray} />
        </div>
      </>
    );
  }

  componentDidUpdate(prevProp) {
    if (prevProp.match.params.id !== this.props.match.params.id) {
      axios
        .get(`/api/videolist/${this.props.match.params.id}`)
        .then(newVideo => {
          const takeOutVideo = this.state.allVideos.filter(
            Video => Video.id !== this.props.match.params.id
          );
          this.setState({
            mainVideo: newVideo.data,
            moreVideoArray: takeOutVideo
          });
        });
    }

    // let takeOutVideos = this.moreVideoArray.filter(takingOutVideos => {
    //   return this.props.match.params.id !== takingOutVideos.id;
  }
}

export default Home;
