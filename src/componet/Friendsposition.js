import React, { useState } from 'react';
import { FriendsWeapons   }from 'D:/Game/React/game/src/componet/OwnWeapon.js';
export default class Friendsposition extends React.Component {
  constructor(props) {
    super(props);
    this.state  = { x: 0  , y:0 ,  listofEnemys: [{x:-500,y:-500 , degree:0}]};

    this.socket = props.socket;
  //  this.printEnemy = this.printEnemy.bind(this);
  }
 
  componentDidMount(){
   
 
   
   
    this.socket.on('FriendsPosition',  (data) =>{
      var table = [];
      
      for(var i =0;i < data.length;i++){
  //  console.log(    data[i].MyBuild)
   table[i] = {x: data[i].x , y : data[i].y, degree:data[i].degree , pickitem: data[i].pickitem};
        
      }
      
   
      this.setState({listofEnemys:table})
       localStorage.setItem("Tablewithallplayers", JSON.stringify(table))  
     
     ///  console.log(JSON.parse(localStorage.getItem("Tablewithallplayers")))
     
    });
    console.log("from enemy" + this.state.listofEnemys[0].x)
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
   

     
   {this.state.listofEnemys.map((number) => <Enemyone  xaxis = {number.x} yaxis = {number.y} degree = {number.degree} pickitem = {number.pickitem}></Enemyone>)}
          
    
        
        </div>
      )
  }
  }
 
function Enemyone  (all)  {
 
  const x =  10||200;
  //console.log(all.xaxis)
  return <div  style={{background: /*green*/"green"  ,width:"50px" , height:"50px" , position:"absolute" ,left:all.xaxis , top:all.yaxis, transition: 'all 0.05s ease', }}>
 <FriendsWeapons degree = {all.degree} pickitem = {all.pickitem} ></FriendsWeapons>
  <p style= {{color:"blue"}}>Friend</p>
  </ div>;
};

  
