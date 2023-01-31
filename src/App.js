import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';
import TestC from "./TestC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Lionel Messi",
        bio: "The greatest of all time",
        imgSrc:
          "https://openseauserdata.com/files/40269f1fedb10a71968547774c558230.jpg",
        profession: "Professional footballer",
        shows : false,
        count :0
      
      },
    };
  }

  change = () =>{
    this.setState({shows: ! this.state.shows})
  }

  render() {

    return (
      <div className="all">
     { this.state.shows? <TestC> </TestC>:null}
     <br></br>
       <button  onClick={this.change}>Show Me</button>
      </div>
    
    );
 
  }
}

export default App;
