import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import UploadVideo from "./components/UploadVideo";
import Home from "./components/Home";
import "./styles/index.css";

// const API_KEY = "?api_key=5837628d-ea78-44d2-9c8d-1fd31be6f9cf";
// const url = `https://project-2-api.herokuapp.com/videos${API_KEY}`;
// const urlMainVid = `https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`;

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     commentArray: [],
  //     moreVideoArray: [],
  //     mainVideo: {}
  //   };
  // }

  // componentDidMount() {
  //   axios.get(url).then(videoContent => {
  //     axios.get(urlMainVid).then(mainVideoContent => {
  //       this.setState(
  //         {
  //           mainVideo: mainVideoContent.data,
  //           moreVideoArray: videoContent.data
  //         },
  //         () => console.log(this.state)
  //       );
  //     });
  //   });
  // }

  render() {
    // if (this.state.moreVideoArray.length === 0) return <h1>Now Loading...</h1>;
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route
              path="/"
              // render={props => <Home homeState={this.state} {...props} />}
              component={Home}
              exact
            />
            <Route
              path="/videos/:id"
              component={Home}
              // render={props => <Home homeState={this.state} {...props} />}
            />
            <Route path="/upload" component={UploadVideo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     commentArray: [
//       {
//         name: "Micheal Lyons",
//         date: "12/18/2018",
//         comment:
//           "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
//       },
//       {
//         name: "Gary Wong",
//         date: "12/12/2018",
//         comment:
//           "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
//       },
//       {
//         name: "Theodore Duncan",
//         date: "11/15/2018",
//         comment:
//           "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!"
//       }
//     ],
//     moreVideoArray: [
//       {
//         id: 1,
//         image: require("./Assets/Images/video-list-1.jpg"),
//         title: "Become A Travel Pro In One Easy Lesson",
//         channel: "Todd Welch"
//       },
//       {
//         id: 2,
//         image: require("./Assets/Images/video-list-2.jpg"),
//         title: "Les Houches The Hidden Gem Of The Chamonix",
//         channel: "Cornelia Blair"
//       },
//       {
//         id: 3,
//         image: require("./Assets/Images/video-list-3.jpg"),
//         title: "Travel Health Useful Medical Information For",
//         channel: "Glen Harper"
//       },
//       {
//         id: 4,
//         image: require("./Assets/Images/video-list-4.jpg"),
//         title: "Cheap Airline Tickets Great Ways To Save",
//         channel: "Emily Harper"
//       },
//       {
//         id: 5,
//         image: require("./Assets/Images/video-list-5.jpg"),
//         title: "Take A Romantic Break In A Boutique Hotel",
//         channel: "Ethan Owen"
//       },
//       {
//         id: 6,
//         image: require("./Assets/Images/video-list-6.jpg"),
//         title: "Choose The Perfect Accommodations",
//         channel: "Lydia Perez"
//       },
//       {
//         id: 7,
//         image: require("./Assets/Images/video-list-7.jpg"),
//         title: "Cruising Destination Ideas",
//         channel: "Timothy Austin"
//       },
//       {
//         id: 8,
//         image: require("./Assets/Images/video-list-8.jpg"),
//         title: "Train Travel On Track For Safety",
//         channel: "Scotty Cranmer"
//       }
//     ],
//     mainVideo: {
//       // id: "type of <string>",
//       title: "BMX Rampage: 2018 Highlights",
//       description:
//         "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title",
//       channel: "Red Cow",
//       image: "../Assets/Images/video-list-0.jpg",
//       views: "1,001,023",
//       likes: "110,985"
//       // duration: "type of <string>",
//       // video: "",
//       // timestamp: "type of <number>",
//       // comments: "type of <array>"
//     }
//   };
