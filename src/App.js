
import socketIOClient from "socket.io-client";
import './App.css';

import React, { Suspense, laz , useState , useEffect,memo ,createRefy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Friendsposition from 'D:/Game/React/game/src/componet/Friendsposition.js';
import Myself from 'D:/Game/React/game/src/componet/Myself.js';
import Alert from 'D:/Game/React/game/src/componet/Alert.js';
import Login from 'D:/Game/React/game/src/componet/Login.js';
import MouseandAttack from 'D:/Game/React/game/src/componet/MouseandAttack.js';
import Chat from 'D:/Game/React/game/src/componet/Chat.js';
import PropTypes from 'prop-types';
import {Animate} from 'react-rebound';
import ReactDOM from 'react-dom';
import { useEntityComponentSystem } from 'react-entity-component-system'
import Bullets from "./componet/Bullets";
import Questsman from "./componet/Questsman";
import Mobs from "./componet/Mobs";
import Lines from "./componet/Lines";
import EnemyLines from "./componet/EnemyLines.js";
import Defense from "./componet/Defense.js";
//import {ThemeContext} from './theme-context'; 
//<Friendsposition socket = {this.socket} ></Friendsposition>  
    // <Mobs socket = {this.socket}></Mobs>
   //  <Myself socket = {this.socket}></Myself>
    //<Bullets socket = {this.socket}></Bullets>
export var ThemeContext = React.createContext("herofromapps");
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      endpoint: "localhost:4001",
     AttackButtunhide:"",
     HomeButton:"none"
      ///
     
    };
    this.socket = socketIOClient(this.state.endpoint);
    this.ClickedAttackButton = this.ClickedAttackButton.bind(this);
    this.ClickedHomeButton = this.ClickedHomeButton.bind(this);
  }

  ClickedAttackButton(){
    this.setState({AttackButtunhide:"none"})
    this.setState({HomeButton:""})
  }
  ClickedHomeButton(){
    this.socket.emit("Homelogin",)
    this.setState({AttackButtunhide:""})
    this.setState({HomeButton:"none"})
  }
render() {
  
    // testing for socket connections
//{this.createTable()}  <Friendsposition socket = {this.socket} ></Friendsposition>  <Mobs socket = {this.socket}></Mobs> <Myself socket = {this.socket}></Myself><Bullets socket = {this.socket}></Bullets>
   const word = this.word;
   ThemeContext = React.createContext("arfa");
    return (
      <div style={{ textAlign: "center" }}>
     <Router>
     <Switch>
          <Route path="/about">
          <Friendsposition socket = {this.socket} ></Friendsposition>  
     <Mobs socket = {this.socket}></Mobs>
     <Myself socket = {this.socket}></Myself>
    <Bullets socket = {this.socket}></Bullets>
     
    
     
        
     
     <Questsman socket = {this.socket}></Questsman>
     <Lines socket = {this.socket} ></Lines>
    
          </Route>
          <Route path="/Defense">
            <Defense socket = {this.socket}></Defense>
          </Route>
          <Route path="/Attack">
        
     
      
        <EnemyLines socket = {this.socket} ></EnemyLines>
       
             </Route>
          <Login socket = {this.socket}></Login>

    
        </Switch>
        <Link to="/about">
        <button onClick={this.ClickedHomeButton} style =  {{background:"#4d79ff",position:"absolute",border:" 4px solid black", height:130,width:130,borderRadius:"12px" ,top:590,left:10,display:this.state.HomeButton}}>
              <img src = {"House.png"}  style =  {{position:"absolute" ,height:70,width:55,borderRadius:"12px" ,top:20,left:34}} ></img>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px",fontSize:"25px" ,top:60,left:30}}>Home</p>
              </button>
 </Link>  <Link to="/attack">
 <button onClick={this.ClickedAttackButton} style =  {{ background:"#ff6600",position:"absolute",border:" 4px solid black", height:130,width:130,borderRadius:"12px" ,top:590,left:10,display:this.state.AttackButtunhide}}>
              <img src = {"Attackimage.png"}  style =  {{position:"absolute" ,height:70,width:70,borderRadius:"12px" ,top:20,left:26}} ></img>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px",fontSize:"25px" ,top:60,left:30,fontFamily:"Copperplate,fantasy"}}>Attack</p>
              </button>
 </Link>
 <Link to="/Defense">
     <button type="button">
          Defense
     </button>
 </Link>
        </Router>
        
        <Alert socket={this.socket}></Alert>
        <img src="fon.png"draggable="false" style={{position:"absolute", zIndex:-1000, left:0, height:300,top:455}} ></img>
        <img src="fon.png"draggable="false" style={{position:"absolute", zIndex:-1000, left:0, height:300,top:155}} ></img>
        <img src="fon.png"draggable="false" style={{position:"absolute", zIndex:-1000, left:0, height:300,top:-140}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:300, height:300,top:455}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:300, height:300,top:155}} ></img>
        <img src="fon.png"draggable="false" style={{position:"absolute", zIndex:-1000, left:300, height:300,top:-140}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:600, height:300,top:455}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:600, height:300,top:155}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:600, height:300,top:-140}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:900, height:300,top:455}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:900, height:300,top:155}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:900, height:300,top:-140}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:1200, height:300,top:455}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:1200, height:300,top:155}} ></img>
        <img src="fon.png"draggable="false" style={{position:"absolute", zIndex:-1000, left:1200, height:300,top:-140}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:1500, height:300,top:455}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:1500, height:300,top:155}} ></img>
        <img src="fon.png" draggable="false"style={{position:"absolute", zIndex:-1000, left:1500, height:300,top:-140}} ></img>
         {/*<Chat></Chat><Enemy value = {"varna"}></Enemy>
         <img src={"startbar.png"} width="100" height="100" alt="Computer Hope" style = {{position:"absolute",left:"20%" , top:"83%" , display:"none"}}></img >
         <img src={"10Health.png"} width="100" height="120" alt="Computer Hope" style = {{position:"absolute",left:"22%" , top:"82%" , zIndex:"-1"}}></img>*/}
      </div>
  );
 
  }
  // sending sockets
  
  ///

  // adding the function
 //

/*
createTable = () => {
  
 let table = []

  for (let i = 0; i < 3; i++) {
  table.push(<p>{this.state.word}</p>)
  }
  return table
}
  */
  
}


export default App;