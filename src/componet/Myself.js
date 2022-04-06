import React, { useState , useEffect,memo ,createRef, useContext } from 'react';
import MouseandAttack from 'D:/Game/React/game/src/componet/MouseandAttack.js';
import Bag from 'D:/Game/React/game/src/componet/Bag.js';
import {ThemeContext} from 'D:/Game/React/game/src/App.js';
export default class Myself extends React.Component {


  




   
    constructor(props) {
      super(props);
      this.state = {
        endpoint: "localhost:4001",
        
        point:50,
        ///
        
        top: -500,
        left:-500,
        pickitem:"0FirstSniper"
        ///
  
      };
      this.socket = props.socket;
      
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleKeyUP = this.handleKeyUP.bind(this);
    }
  render() {
      // testing for socket connections
  //{this.createTable()}
     const word = this.word;
      return (
        <div style={{ textAlign: "center" }}>
        <ThemeContext.Provider value={"left"}></ThemeContext.Provider>
     <Hero left = {this.state.left}  top = {this.state.top - 15} addword = {"Hero"}></Hero>
     <MouseandAttack myselftop = {this.state.top } myselfleft={this.state.left} socket = {this.socket} pickitem = {this.state.pickitem}  ></MouseandAttack> 
   <Bag socket={this.socket}></Bag>
           
           
           {/*<Chat></Chat>Enemy value = "ARFA"></Enemy>*/}
        </div>
    );
   
    }
    // sending sockets
    
    ///
  
    // adding the function
   //
  handleKeyUP(e){
    
    /*
    let top =  this.state.top;
    let left =  this.state.left;
    this.setState({top:  top})
    this.setState({left:  left})
    */
  
    if(e.keyCode == 65) this.socket.emit('Keypress',{ inputID:"Left" ,state:false});;
    if(e.keyCode == 87) this.socket.emit('Keypress',{ inputID:"Up" ,state:false});;
    if(e.keyCode == 68) this.socket.emit('Keypress',{ inputID:"Right" ,state:false});;
    if(e.keyCode == 83) this.socket.emit('Keypress',{ inputID:"Down" ,state:false});;
  
  
  }
    handleKeyDown (e) {
      
       /*
      let top =  this.state.top;
      let left =  this.state.left;
      this.setState({top:  top})
      this.setState({left:  left})
      console.log(this.state.top);
      */
      if(e.keyCode == 65){
       
        //ThemeContext = React.createContext("left");
        this.socket.emit('Keypress', {inputID:"Left" , state:true});;
      }
      if(e.keyCode == 87)     
      {
        //ThemeContext = React.createContext("UP");
        this.socket.emit('Keypress', {inputID:"Up" ,state:true});;
    }
      if(e.keyCode == 68)this.socket.emit('Keypress', {inputID:"Right" ,state:true});;
      if(e.keyCode == 83)this.socket.emit('Keypress', {inputID:"Down" ,state:true});;
      
  }
   
      
    
    componentDidMount(){
   
      window.onkeydown = this.handleKeyDown;
      window.onkeyup= this.handleKeyUP;
      
      
      this.socket.on('myself',(data) =>{
       
      //  pickeditemS = data.pickeditem;
          this.setState({left: data.x});
          this.setState({top : data.y});
          this.setState({pickitem : data.pickitem.value});
        //  console.log(data.y+"myself")
          //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
        //  console.log(data.pickitem);
      
            
      });
     this.socket.on('word', (get) => {
      this.setState({getword: get});
        // console.log("there");
        console.log("SOCKET IO :" + this.state.getword);
      })
   
  } 
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
  export const Hero = React.memo(function Hero({addword , top, left,}) {
    //let asdas = useContext(ThemeContext);
    //console.log(asdas);
    var style = {
     
      background: "blue",
      width:"50px" , height:"50px",
          position:"absolute ",
          top:top,
          left:left,
          transition: 'all 0.05s ease',
          
        
    };
  return <p  style={style}>{addword}</p>;
  });
  
