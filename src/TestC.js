import React, { Component } from 'react'

export default class TestC extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Person: {
            fullName: "Lionel Messi",
            bio: "The greatest of all time",
            imgSrc:
              "https://openseauserdata.com/files/40269f1fedb10a71968547774c558230.jpg",
            profession: "Professional footballer",
            shows : false ,
             
          
          },count : 0
        };
      }

      change = () =>{
        this.setState({shows: ! this.state.Person.shows})
      }    

      componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },1000)
      }
      
  render() {
    return (
      <div className="App">

     <> <h2>Name : {this.state.Person.fullName} </h2>
      <h4>Bio: {this.state.Person.bio} </h4>
      <h6>Profession: {this.state.Person.profession} </h6>
      <img src={this.state.Person.imgSrc} alt="the goat" style={{width:"200px", height:"250px"}}/>  </> 
      <h4>Time after mount :{`${this.state.count} s`}</h4>
      
       </div>
    )
  }
}
