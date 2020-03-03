import React, { Component } from "react";
import Header from "./components/Header";
import UploadVideo from "./components/UploadVideo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/index.css";

export default class UploadPage extends Component {
  render() {
    return (
      <>
        <Header />
        <UploadVideo />
      </>
    );
  }
}
