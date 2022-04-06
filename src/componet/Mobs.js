import React, { useState , useEffect,memo ,createRef, useContext } from 'react';

export default class  Mobs extends React.Component {


  




   
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
        mob:[]
      }
      this.socket = props.socket;
   // this.onMouseDownAccept = this.onMouseDownAccept.bind(this);
    }
  
    componentDidMount(){
     // this.socket.on('MyQuests',(data) =>{
     //   this.setState({Quest : data})
    //  });
  
    //var g = document.createElement('div');
  //  var g = document.createElement('div');
    //    g.id = 'someId';
    this.socket.on('myself',(data) =>{
       
        //  pickeditemS = data.pickeditem;
            this.setState({left: data.x});
            this.setState({top : data.y});
           // this.setState({pickitem : data.pickitem.value});
            //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
          //  console.log(data.pickitem);
        //console.log(data.y)
              
        });
        this.socket.on('mobs',(data) =>{
       
          //  pickeditemS = data.pickeditem;
              
             // this.setState({pickitem : data.pickitem.value});
              //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
          //  console.log(this.state.mob);
         
                this.setState({mob: data})
                
          });
       // g.position ="absolute";
     //   g.top=  this.state.top+ "px";
    setInterval(() => {
    if(this.state.top -20  < this.state.y){
        this.setState({y : this.state.y-2})
        this.setState({image:"GOBLINWALK.gif"})
    }
    
    if(this.state.top-20  > this.state.y){
        this.setState({y : this.state.y+2})
        this.setState({image:"GOBLINWALK.gif"})
    }
    if(this.state.left - 100  < this.state.x){
        this.setState({x : this.state.x-2})
       this.setState({scale:"-1"})
       this.setState({image:"GOBLINWALK.gif"})
    }
    if(this.state.left - 100 == this.state.x){
     this.setState({image:"GOBLINATTACK.gif"})
  }
    if(this.state.left - 150> this.state.x){
        this.setState({x : this.state.x+2})
        this.setState({scale:"1"})
        this.setState({image:"GOBLINWALK.gif"})
    }
        //   console.log(players.Bullets[0]) GOBLINIDLE
      //  g.top=  this.state.top+ "px";
      //  this.setState({top: this.state.top +20})      
        //   this.setState({y:g.top})
        // console.log(g.top)
         
         }, 1000/15);
         setInterval(() => {
        
          var y = Math.floor((Math.random() * 100) + 1);
          if(this.state.arreyofattackX > -100){
          this.setState({arreyofattackX: ( this.state.arreyofattackX - 5) })
         // console.log("opane")
          }
          else{
            this.setState({arreyofattackX: ( this.state.arreyofattackX + 5) })
          }
              //   console.log(players.Bullets[0])
            //  g.top=  this.state.top+ "px";
            //  this.setState({top: this.state.top +20})      
              //   this.setState({y:g.top})
              // console.log(g.top)
               
               }, 1000/30);
       
        
    }
  render() {
      // testing for socket connections
  //{this.createTable()}
  
      return (
        <div style={{/*position:"absolute" , top:this.state.y, left:this.state.x , height:"100px", width: "100px" */}}>
       {/* <img src={this.state.image} style={{position:"absolute" , height:"200px", width: "200px",transform:"scaleX("+this.state.scale+")" }} ></img>*/}
       
        
        { this.state.mob.map((parametur) =><Mob x = {parametur.x} y ={parametur.y}></Mob>)}
        
        
        {/*<img src={"GOBLINWALK.gif"} style={{position:"absolute" , left:this.state.arreyofattackX , height:"100px", width: "100px" ,}}></img>*/}
        </div>
    );
   
    }
    
    
  }
  
  const  Mob =   memo(({x , y, img}) => {
   
   
    
 
  return   <img src={"GOBLINIDLE.gif"} style={{position:"absolute" , height:"200px", width: "200px", top:y,left:x }} >
  </img>
  
   })