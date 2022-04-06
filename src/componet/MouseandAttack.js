import React, { useState } from 'react';
import { MyselfWeapon   }from 'D:/Game/React/game/src/componet/OwnWeapon.js';
import { Degree   }from 'D:/Game/React/game/src/componet/OwnWeapon.js';
export default class MouseandAttack extends React.Component {
  constructor(props) {
    super(props);
    this.state  = { mousecoordX:0 , mousecoordY:0,
      offsetLeft :0,
      offsetTop:0
    };
    this.socket = props.socket;
    this.ChangemouseCoords = this.ChangemouseCoords.bind(this);
    
  //  this.printEnemy = this.printEnemy.bind(this);
  }
 componentDidMount(){ 
  //this.setState({ offsetLeft:document.getElementById("movebar").offsetLeft})  
  //this.setState({ offsetTop:document.getElementById("movebar").offsetTop})  
    document.addEventListener("mousemove", this.ChangemouseCoords);
    console.log(this.state.mousecoordX - this.state.offsetLeft)
  }
 ChangemouseCoords(event) {
//  this.setState({ offsetLeft:document.getElementById("movebar").offsetLeft})  
 // this.setState({ offsetTop:document.getElementById("movebar").offsetTop})  
    this.setState({ mousecoordX:event.clientX});
    this.setState({ mousecoordY:event.clientY});
  }
 /*
     printEnemy()  {
      let table = [];
   
      this.socket.on('EnemyPosition',function (data){
       
        for(var i =0;i < data.length;i++){
     
          
          table.push({x: data.x , y : data.y})
        }
      this.setState({listofEnemys:table})
            
      });
      
    
      
      return table;
    }
    */ 
    render() {   
      return (
        <div>
      {/*  <MouseIcon mousecoordX={this.state.mousecoordX} mousecoordY={this.state.mousecoordY}></MouseIcon> */ }
    <MyselfWeapon socket = {this.socket} mousex = {this.state.mousecoordX} mousey = {this.state.mousecoordY} myselftop = {this.props.myselftop} myselfleft = {this.props.myselfleft} pickitem= {this.props.pickitem} ></MyselfWeapon>
      <p> Y :{this.state.mousecoordY}</p>
      <p> X :{this.state.mousecoordX}</p>
      <p> Y movebar :{this.state.mousecoordY - this.state.offsetTop}</p>
      <p> X movebar :{this.state.mousecoordX - this.state.offsetLeft}</p>
      <p>Degree {Degree._currentValue}</p>
      
        </div>
      )
  }
  }
 
function MouseIcon  (mouseposition )  {
   
    return <div  style={{background: "red" , width:"5px" , height:"50px" , position:"absolute" ,left:mouseposition.mousecoordX  , top:mouseposition.mousecoordY - 20 ,zIndex:"1" }}>
    <div  style={{background: "red" , width:"50px" , height:"5px" , position:"absolute" ,left:-23 , top:23 }}></ div>
    </ div>
};


