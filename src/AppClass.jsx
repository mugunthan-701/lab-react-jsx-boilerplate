import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const image= this.imageData();

    return(
      <div id="app">
      <div id="header">
        <h1>kalvium gallery</h1>
      </div>
      <div id="grid">
        {image.map((e)=>(
          <img key={e.id} src={e.img} alt="" />
        ))}
      </div>
      </div>
    )
  }
}
