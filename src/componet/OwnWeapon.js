import React, { useState ,useContext } from 'react';

export var Degree = React.createContext(20);
export function MyselfWeapon  (all)  {
    //console.log( all.myselftop);
  
  //  (offset.left) + (img.width() / 2)
    var center_x = all.myselfleft + 50;
    var center_y = all.myselftop + 5;
    var mouse_x = all.mousex ;
    var mouse_y = all.mousey  ;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 180;
    //console.log(degree)
    //var degree = (radians / 2*3.14) * 360;
   // console.log(degree)
    //var coords = "X coords: " +mouse_x + ", Y coords: " + mouse_y;
    //console.log( radians);
    // Socket is there
    Degree = React.createContext(degree)
   
   all.socket.emit('Degree', degree);
   // Socket is there
    //box-shadow: 0px 2px 20px blue;
   // ,position:"absolute" ,transform: `rotate(${ degree}deg)`,
  //console.log(all.pickitem);
  
   
   //all.socket.emit('Pickitem', pickeditem);
   //all.socket.on('myself',(data) =>{
   // pickeditemS = data.pickeditem;
   //});
   if(all.pickitem != null){
   var degreeofthisItem = parseInt(all.pickitem.toString());
   }
   //console.log(degreeofthisItem);
    if(false){
     return  <div  style={{ left: all.myselfleft, top:all.myselftop,height:"10px", width:"100px",background:"#8B4513",position:"absolute" ,transform: `rotate(${ degree}deg)` }}>
       <div  style={{ left: 90, top:-3,height:"15px", width:"15px",background:"rgb(255, 176, 0)",position:"absolute" ,transform: `rotate(${ 45}deg)`,boxShadow: "0px 2px 20px yellow" }}>
         <p>nameofweapon</p>
       </div>
       </div>
    }
    if(all.pickitem != null ){
      return <img src={all.pickitem.toString() + ".png"} style={{  width:"32", height:"32", left: all.myselfleft, top:all.myselftop, position:"absolute" ,transform: `rotate(${ degree + degreeofthisItem}deg)`, }} ></img>
      
    }
    else{
      
      return <div>
       

      
        </div>
    }
 };
 export function FriendsWeapons  (all)  {
   if( all.pickitem != null){
  var pickeditem  = all.pickitem;
  var degreeofthisItem = parseInt(pickeditem);
return<img src={ all.pickitem + ".png" } style={{  width:"32", height:"32", left: 0  , top:0, position:"absolute" ,transform: `rotate(${ all.degree  + degreeofthisItem }deg)` ,transition: 'all 0.05s ease',}} ></img>
   }
   else{ 
     return <div></div>
   }
 }