import React, { useState , useEffect,memo ,createRef, useContext } from 'react';
import { FixedSizeList } from 'react-window';

export default class  Defense extends React.Component {


  




   
    constructor(props) {
      super(props);
      this.state = {
        x:200,
        y:200,
        top:0,
        left:-70,
        scale:"1",
        arreyofattackX:0,
        arreyofattackY:0,
        image:"GOBLINWALK.gif",
        verticallines:[{x:200,y:200}],
        horizontallines:[],
        whitebox:{x:0,y:0},
        color:"#ff0000",
        arreys:[],
        degree:0,
        buildheightwidth:20,
        build:[],
        cannons:[],
        count:0,
        XtoMove:0,
        YtoMove:0,
        downcheck:"up",
        TankBullets:[],
        wall:[],
        CannonBullets:[],
        TankPosition:[],
        BigHouse:{x:693 , y:300 },
        HideBighouse:""
      }
      this.socket = props.socket;
    
      
    //  this.trys = this.trys.bind(this);
   // this.onMouseDownAccept = this.onMouseDownAccept.bind(this);
    }
   
    componentDidMount(){
//console.log(this.state.whitebox.x)TankBullets
this.socket.on('FriendsPosition',  (data) =>{

    
    for(var i =0;i < data.length;i++){
//  console.log(    data[i].MyBuild)
// console.log(data[i].MyBuild )
      
    }
   
   ///  console.log(JSON.parse(localStorage.getItem("Tablewithallplayers")))
   
  });
  this.socket.on('Attackers',(data) =>{
    console.log(data)
if(data != null){
  console.log(data)
    //  console.log(data.x)
       //  pickeditemS = data.pickeditem;
          // this.setState({left: data.x});
          // this.setState({top : data.y});
         //  this.setState({pickitem : data.pickitem.value});
           //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
         //  console.log(data.pickitem);
        // console.log(data.TanksPosition)
        var TanksPosition = [];
        for(var i = 0; i < data.TanksPosition.length;i++)  {
       //  console.log(data.TankBullets[i]) 
        // console.log(i) 
          if(data.TanksPosition[i] != null && data.TanksPosition[i] != undefined ){
            TanksPosition.push( data.TanksPosition[i]);
//console.log(data.Bullets)

          }
          else{
           // console.log("it is delete :" + i)
          }
       //  console.log( data.Bullets[i]);
        }
       this.setState({TankPosition:TanksPosition}) 
      //  this.setState({TankPosition:data.TanksPosition})
         var CannonBullets = [];
       for(var i = 0; i < data.CannonBullets.length;i++)  {
      //  console.log(data.TankBullets[i]) 
       // console.log(i) 
         if(data.CannonBullets[i] != null && data.CannonBullets[i] != undefined){
          CannonBullets.push( data.CannonBullets[i]);
//console.log(data.Bullets)

         }
         else{
          // console.log("it is delete :" + i)
         }
      //  console.log( data.Bullets[i]);
       }
      this.setState({CannonBullets:CannonBullets}) 
      
      var bullets = [];
      for(var i = 0; i < data.TankBullets.length;i++)  {
     //  console.log(data.TankBullets[i]) 
      // console.log(i) 
        if(data.TankBullets[i] != null && data.TankBullets[i] != undefined){
bullets.push( data.TankBullets[i]);
//console.log(data.Bullets)

        }
        else{
         // console.log("it is delete :" + i)
        }
     //  console.log( data.Bullets[i]);
      }
     this.setState({TankBullets:bullets}) 

      
      var Cennons = [];
      var MyBuild = [];
      for(var i = 0; i < data.MyBuild.length;i++)  {
     //  console.log(data.TankBullets[i]) 
      // console.log(i) 
        if(data.MyBuild[i] != null && data.MyBuild[i] != undefined && data.MyBuild[i].first == 0 && data.MyBuild[i].type == "Build" && i!=0 ){
          MyBuild.push( data.MyBuild[i]);
          
//console.log(data.Bullets)

        }
        if(data.MyBuild[i] != null && data.MyBuild[i] != undefined && data.MyBuild[i].first == 0 && data.MyBuild[i].type == "Cannon"){
          Cennons.push( data.MyBuild[i]);
          //console.log(data.MyBuild[i])
          
//console.log(data.Bullets)

        }
        if(data.MyBuild[i] != null && data.MyBuild[i] != undefined && data.MyBuild[i].first == 0 && data.MyBuild[i].type == "Build" && i==0 ){
          
          this.setState({BigHouse:data.MyBuild[i]})
//console.log(data.Bullets)

        }
        if(data.MyBuild[i] == undefined  && i==0 ){
          this.setState({HideBighouse:"none"})
         // console.log("it is delete :" + i)
        }
     //  console.log( data.Bullets[i]);
      }
      this.setState({cannons:Cennons})  
  
     // console.log(this.state.build)
     this.setState({build:MyBuild})  
    // console.log(this.state.build)
      
      //delete bullets;
         //    console.log(this.state.Bullets);
    }
       });
/*
      this.socket.on('myself',(data) =>{
        //  console.log(data.x)
           //  pickeditemS = data.pickeditem;
              // this.setState({left: data.x});
              // this.setState({top : data.y});
             //  this.setState({pickitem : data.pickitem.value});
               //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
             //  console.log(data.pickitem);
            // console.log(data.TanksPosition)
            var TanksPosition = [];
            for(var i = 0; i < data.TanksPosition.length;i++)  {
           //  console.log(data.TankBullets[i]) 
            // console.log(i) 
              if(data.TanksPosition[i] != null && data.TanksPosition[i] != undefined ){
                TanksPosition.push( data.TanksPosition[i]);
    //console.log(data.Bullets)
   
              }
              else{
               // console.log("it is delete :" + i)
              }
           //  console.log( data.Bullets[i]);
            }
           this.setState({TankPosition:TanksPosition}) 
          //  this.setState({TankPosition:data.TanksPosition})
             var CannonBullets = [];
           for(var i = 0; i < data.CannonBullets.length;i++)  {
          //  console.log(data.TankBullets[i]) 
           // console.log(i) 
             if(data.CannonBullets[i] != null && data.CannonBullets[i] != undefined){
              CannonBullets.push( data.CannonBullets[i]);
   //console.log(data.Bullets)
  
             }
             else{
              // console.log("it is delete :" + i)
             }
          //  console.log( data.Bullets[i]);
           }
          this.setState({CannonBullets:CannonBullets}) 
          
          var bullets = [];
          for(var i = 0; i < data.TankBullets.length;i++)  {
         //  console.log(data.TankBullets[i]) 
          // console.log(i) 
            if(data.TankBullets[i] != null && data.TankBullets[i] != undefined){
  bullets.push( data.TankBullets[i]);
  //console.log(data.Bullets)
 
            }
            else{
             // console.log("it is delete :" + i)
            }
         //  console.log( data.Bullets[i]);
          }
         this.setState({TankBullets:bullets}) 

          
          var Cennons = [];
          var MyBuild = [];
          for(var i = 0; i < data.MyBuild.length;i++)  {
         //  console.log(data.TankBullets[i]) 
          // console.log(i) 
            if(data.MyBuild[i] != null && data.MyBuild[i] != undefined && data.MyBuild[i].first == 0 && data.MyBuild[i].type == "Build" && i!=0 ){
              MyBuild.push( data.MyBuild[i]);
              
  //console.log(data.Bullets)
 
            }
            if(data.MyBuild[i] != null && data.MyBuild[i] != undefined && data.MyBuild[i].first == 0 && data.MyBuild[i].type == "Cannon"){
              Cennons.push( data.MyBuild[i]);
              //console.log(data.MyBuild[i])
              
  //console.log(data.Bullets)
 
            }
            if(data.MyBuild[i] != null && data.MyBuild[i] != undefined && data.MyBuild[i].first == 0 && data.MyBuild[i].type == "Build" && i==0 ){
              
              this.setState({BigHouse:data.MyBuild[i]})
  //console.log(data.Bullets)
 
            }
            if(data.MyBuild[i] == undefined  && i==0 ){
              this.setState({HideBighouse:"none"})
             // console.log("it is delete :" + i)
            }
         //  console.log( data.Bullets[i]);
          }
          this.setState({cannons:Cennons})  
      
         // console.log(this.state.build)
         this.setState({build:MyBuild})  
        // console.log(this.state.build)
          
          //delete bullets;
             //    console.log(this.state.Bullets);
           });
           */

      
    
     // this.setState({ arreys: this.state.arreys.push({x:1,y:1}) })
  //console.log((55 % 10) + "there"  )
    //  console.log(document.getElementById("box").offsetLeft + 'leftoff')
     //console.log("ds")


 //if(this.state.downcheck == "down")
 //document.addEventListener("mousemove",()=> this.trys(document.getElementById("click").offsetLeft,document.getElementById("click").offsetTop));
 document.addEventListener("click",  this.Paste);
 this.socket.on("Degreeonmob",(data) =>{
   this.setState({degree:data})
   //console.log(data)
 })
   //var verticallines = [] ;
     // var horizontallines = [] ;
     // var count = 1;
   //  var colors = ["limegreen","olivedrab"]
     
    // for(var i = -700; i<= 2400;i+=10){
   //   verticallines.push({x:i})
     
      //  this.setState({ verticallines: verticallines })
       
        //count++
    // }
     
    }
    
  render() {
      // testing for socket connections        <WhiteBox y={this.state.whitebox.y} x={this.state.whitebox.x}></WhiteBox>
  //{this.createTable()} { this.state.horizontallines.map((parametur) =><Horizontallines y = {parametur.y} ></Horizontallines>)}    {this.state.cannonsBulled.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
  
      return (
        <div >
          
              <img      src = {"House.png"} draggable="false" style={{zIndex: this.state.BigHouse.y, position:"absolute" ,height:80,width:65,left:this.state.BigHouse.x-16,top: this.state.BigHouse.y-50,display:this.state.HideBighouse}}></img>  
          { this.state.cannons.map((parametur) =>
<div  id = "Cannon"style={{height:32,position:"absolute",top:parametur.y- 35,left:parametur.x- 25,zIndex:parametur.y}}>
<img   src={"1HalfCannon.png"}style={{ position:"absolute",width:60,height:60,  }}></img>
<img id = "fakemob"  src={"2HalfCannon2.png"}style={{height:32,position:"absolute",width:40,height:40, transform: 'rotateX(45deg) rotateZ('+(parametur.degree )+'deg)', left:10, }}>
</img>
</div>)}
          { this.state.TankPosition.map((parametur) => <TankPosition y={parametur.y} x={parametur.x}  degree= {parametur.degree}></TankPosition>)}
        {this.state.TankBullets.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
        {this.state.CannonBullets.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
          
    
    { this.state.wall.map((parametur) => <div>  <div  style={{position:"absolute" }} >
        
        <img draggable="false" src = {"firstwall2.png"}  style={{zIndex:parametur.y, position:"absolute" ,height:20,width:20,  top:parametur.y-9,left:parametur.x-4}}></img>
          <div   style={{position:"absolute" ,  width:9,  
     height: 9,border: "1px solid red",transform: `rotateX(45deg) rotateZ(45deg)`,zIndex:"4", top:parametur.y,left:parametur.x}} >
     </div>
     
        </div>
       
        </div>)}
    { this.state.arreys.map((parametur) => <WhiteBox y={parametur.y} x={parametur.x} ></WhiteBox>)}
    
    { this.state.build.map((parametur) =><div > 
       
       <div     style={{position:"absolute" ,  width:9,  
     height: 9,border: "1px solid red",transform: `rotateX(45deg) rotateZ(45deg)`,zIndex:"6"}} >
     </div> 
             <img  key={parametur.x,parametur.y }     src = {"greenhouse1.png"} draggable="false" style={{zIndex:parametur.y, position:"absolute" ,height:60,width:45,left:parametur.x-16,top: parametur.y-50}}></img>
                 
           
            
             </div>)}
 

    <Post y={this.state.whitebox.y} x={this.state.whitebox.x} hide ={this.state.buildheightwidth}  ></Post>
        <div id = "box"  style={{position:"absolute" ,left:400, top:0, height:600,width:600,transform: `rotateX(45deg) rotateZ(45deg)`}}>   
        <img draggable="false"  src = {"map2.png"} style={{zIndex:"-1", height:600,width:600}}></img>
        
      
    
        </div>
    
        <img id = "fakemob"  src={"TankEnemy.png"}style={{height:32,
    position:"absolute",
    top:500,
    width:32,
   
    left:500,
    transform: 'rotate('+(this.state.degree - 90 )+'deg)'}}>
   
</img>
 
);

        </div>
        
    );
   
    }
    
    
  }
  
  const  Verticallines =   memo(({x , y, }) => {
   
   
    
 
  return   <div  style={{position:"absolute" ,  top:0,left:x,  width:1,
  height: 600,zIndex:"2",background:"black" }} ></div>
  
   })
   const  Horizontallines =   memo(({y,x,color}) => {
   
 // console.log(HorizontallinesARR[index].y)
    
 
    return   <div   style={{position:"absolute" ,  top:y ,left:x,  width:10,  
    height: 10,zIndex:"2",background:color}} >
    </div>
    
     })
     const  Wall =   memo(({x , y,offsetLeft ,hide }) => {
      // var box =  document.getElementById("box").offsetLeft
       //console.log(x)
       //console.log(y + "y")
       // tryiedformap
       var hidedisplay =""
       if(hide!=0){
        return  <div>  <div  style={{position:"absolute" ,  top:y,left:x }} >
        
        <img src = {"firstwall2.png"}  style={{zIndex:y, position:"absolute" ,height:20,width:20,left:-4,top:-9}}></img>
          <div   style={{position:"absolute" ,  width:9,  
     height: 9,border: "1px solid red",transform: `rotateX(45deg) rotateZ(45deg)`,zIndex:"4",display:hidedisplay}} >
     </div>
     
        </div>
       
        </div>
       }
       
         })
     const  WhiteBox =   memo(({x , y,offsetLeft ,hide }) => {
     // var box =  document.getElementById("box").offsetLeft
      //console.log(x)
      //console.log(y + "y")
      // tryiedformap
      var hidedisplay =""
      if(hide!=0){
       return  <div>  <div  style={{position:"absolute" ,  top:y,left:x }} >
       
         
         <div   style={{position:"absolute" ,  width:9,  
    height: 9,border: "1px solid red",transform: `rotateX(45deg) rotateZ(45deg)`,zIndex:"2",display:hidedisplay}} >
    </div>
    
       </div>
      
       </div>
      }
      
        })
        const  TankPosition =   memo(({x , y,offsetLeft ,hide, func ,degree}) => {
          // var box =  document.getElementById("box").offsetLeft
           //console.log(x)
           //console.log(y + "y")
           // tryiedformap
         //console.log(degree)
      
            return  <div>  <div  style={{position:"absolute" ,  top:y ,left:x  ,transform: 'rotate('+  degree  +'deg)',zIndex:"2"}} >
            
            <img id = "fakemob"  src={"TankEnemy.png"}style={{height:32,
    position:"absolute",
    
    width:32
   
    ,left:-16,top:-20,zIndex:"2"
    }}></img>
            
         
            </div>
           
            </div>
         
             })
             const  Post =   memo(({x , y,offsetLeft ,hide, func ,degree}) => {
              // var box =  document.getElementById("box").offsetLeft
               //console.log(x)
               //console.log(y + "y")
               // tryiedformap
             //console.log(x)
             if(hide!=0){
                return  <div>  <div  style={{position:"absolute" ,  top:y,left:x ,transform: 'rotate('+  degree  +'deg)',zIndex:"2"}} >
                
                <img id = "fakemob"  src={"TankEnemy.png"}style={{height:32,
        position:"absolute",
        
        width:32
       
        ,left:-16,top:-20,zIndex:"2"
        }}></img>
                
             
                </div>
               
                </div>
             }
                 })
             function OneBullet  ({top,left, Degree})  {

              return <div  >
            {/* <img  src={"commonDegrees.png"} style={{position:"absolute"  ,top: 150, left:100,}} ></img> */}  
                  <img  src={"Bullet.png"} style={{position:"absolute"  ,top: top , left:left,transform: `rotate(${ Degree}deg)`,height:5,zIndex:"5"}} ></img>
                 
              </div>;
          //style={style}
            }