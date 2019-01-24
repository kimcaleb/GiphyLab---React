import React, { Component } from "react";
import "milligram";
import "./App.css"
import SearchContainer from './components/SearchContainerComponent';


export default class Home extends Component {
  render() {
    return(
      <div>
        <SearchContainer />
      </div>

    );
  }
}