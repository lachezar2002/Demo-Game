import React, { useState , useEffect,memo ,createRef, useContext } from 'react';
import { FixedSizeList } from 'react-window';

export default class  EnemyLines extends React.Component {


  




   
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
        HideBighouse:"",
        Gold:0,
        win:'',
        CountofTanks:0
      }
      this.socket = props.socket;
    
      this.Paste = this.Paste.bind(this);
      this.onClick = this.onClick.bind(this);
      this.ChangemouseCoords = this.ChangemouseCoords.bind(this);
    //  this.trys = this.trys.bind(this);
   // this.onMouseDownAccept = this.onMouseDownAccept.bind(this);
    }
    onClick() {
      this.socket.emit('NextPlayer',"")
      
    }
    componentDidMount(){
//console.log(this.state.whitebox.x)
this.socket.emit('Attacklogin',"attack")
      this.socket.on('myself',(data) =>{
        this.setState({Gold:data.Gold})
        if(this.state.build == 0){
this.setState({win:"win"})
        }
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

      
      document.addEventListener("keydown", event => {
        if ( event.keyCode == 49) {
console.log("keycode 1")
this.setState({buildheightwidth:20})
        }
        if ( event.keyCode == 50) {
          console.log("keycode 2")
          this.setState({buildheightwidth:20})
                  }
                  if ( event.keyCode == 51) {
                    console.log("keycode 3")
                    this.setState({buildheightwidth:0})

                            }
      
      })

     // this.setState({ arreys: this.state.arreys.push({x:1,y:1}) })
  //console.log((55 % 10) + "there"  )
    //  console.log(document.getElementById("box").offsetLeft + 'leftoff')
     //console.log("ds")
 document.addEventListener("mousemove", this.ChangemouseCoords);

 //if(this.state.downcheck == "down")
 //document.addEventListener("mousemove",()=> this.trys(document.getElementById("click").offsetLeft,document.getElementById("click").offsetTop));
 document.addEventListener("click",  this.Paste);
 this.socket.on("Degreeonmob",(data) =>{
   this.setState({degree:data})
   //console.log(data)
 })
 this.socket.on("CountofTank",(data) =>{
  this.setState({CountofTanks:data})
//   console.log("CountofTank")
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
    Paste() {
      this.state.build.map((parametur) =>console.log(parametur.x+"XXXX"))
      if(this.state.buildheightwidth == 20){
     // var newStateArray = this.state.TankPosition;
//newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y,degree:0})

     // this.setState({ wall: newStateArray })
      
    //console.log( (60/10)/2 );
   // console.log(this.state.whitebox.x +"X");
  //  console.log(this.state.whitebox.y +"Y",document.getElementById("fakemob").offsetTop);
   // console.log(   document.getElementById("fakemob").style.width);
   // console.log( document.getElementById("fakemob").style.height);
  //    console.log(this.state.arreys)
  this.socket.emit('PasteMob',{x:this.state.whitebox.x,y:this.state.whitebox.y, health : 100} )
      }
    /*
      else{
        var y = 0;

        for(var i = 1; i < (this.state.buildheightwidth / 10)+1;i++ ){
console.log(i)
if(i%2==0){
 
for(var j = 1; j< i+1;j++){
  if(){

  }
console.log(j+"da")
}
}else{

}
y+=5;
        }
      }
      */
    }
     ChangemouseCoords(event) {
      // this.Down(5,4)
     // console.log( "event" +this.state.whitebox.x)
      
      var x = this.state.whitebox.x;
      var y = this.state.whitebox.y
   if(event.clientX % 14 == 0){
     x =event.clientX ;
   //  console.log(event.clientX + "%14")
   }
   if(event.clientY % 10 == 0){
    y =event.clientY;
   // console.log(event.clientY + "%14Y")
  }
 
   if(x == this.state.whitebox.x && y == this.state.whitebox.y){
    
     
  
   
    if(event.clientX % 7 == 0 ){
      x =event.clientX;
     // console.log(event.clientX + "%7")
    // y =event.clientY;
    }if(event.clientY % 5 == 0){
      y =event.clientY;
    //  console.log(event.clientX + "%7")
   
    }
  
     
  
  
   
  
 //  console.log(event.clientX + "7 there")
   }
  //var y = 100
      this.setState({ whitebox:{x:x,y:y}});
     //this.setState({})]
     this.setState({color:"#ff0000"})
     //console.log(this.state.whitebox.y)
      }
  render() {
      // testing for socket connections        <WhiteBox y={this.state.whitebox.y} x={this.state.whitebox.x}></WhiteBox>
  //{this.createTable()} { this.state.horizontallines.map((parametur) =><Horizontallines y = {parametur.y} ></Horizontallines>)}    {this.state.cannonsBulled.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
  
      return (
        <div >

<div   style =  {{background:"#B8B8B8",position:"absolute",outline:"none",color:"#fff",border:"none",cursor:"pointer", height:60,width:600,borderRadius:"12px" ,top:-10,left:1000}}>
              <div   style =  {{background:"#606060",position:"absolute",outline:"none",color:"black",border:"none",cursor:"pointer",zIndex:2, height:40,width:100,borderRadius:"12px" ,top:13,left:10}}>
              <p style =  {{position:"absolute" , color:"white",height:35,width:35,borderRadius:"12px",fontSize:"20px" ,top:-10,left:20,fontFamily:"Copperplate,fantasy"}}>{this.state.Gold}</p>
              <img src = {"coin6.png"}  style =  {{position:"absolute" , height:20 ,width:20,borderRadius:"12px" ,top:12,left:0}} ></img>
              </div>
              <div   style =  {{background:"#606060",position:"absolute",outline:"none",color:"black",border:"none",cursor:"pointer",zIndex:2, height:40,width:100,borderRadius:"12px" ,top:13,left:120}}>
              <p style =  {{position:"absolute" , color:"white",height:35,width:35,borderRadius:"12px",fontSize:"20px" ,top:-10,left:20,fontFamily:"Copperplate,fantasy"}}>{this.state.CountofTanks}</p>
              <img src = {"TankEnemy.png"}  style =  {{position:"absolute" , height:20 ,width:20,borderRadius:"12px" ,top:12,left:0}} ></img>
              </div>
             
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px",fontSize:"25px" ,top:60,left:37,fontFamily:"Copperplate,fantasy"}}>Tank</p>
              </div>
        
          <h2>{this.state.win} </h2>
          <button onClick={this.onClick} style =  {{background:"#ff6600",position:"absolute",border:" 4px solid black", height:100,width:220,borderRadius:"12px" ,top:620,left:1300,display:this.state.HomeButton}}>
              <img src = {"Glass.jpg"}  style =  {{position:"absolute" ,height:70,width:70,borderRadius:"12px" ,top:10,left:10}} ></img>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px",fontSize:"25px" ,top:-20,left:120,fontFamily:"Copperplate,fantasy"}}>Next</p>
              </button>
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