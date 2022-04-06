import React, {   memo ,useContext ,useCallback, useMemo,useState, useEffect} from 'react';
import { Degree   }from 'D:/Game/React/game/src/componet/OwnWeapon.js';
export default  class Bullets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        top:500,
        left:300,
        Cside:0,
        bool:false,
        Degree:0,
        mouseX : 0,
        mouseY:0,
        MyselfBullets:[],
        FriendsBullets:[]
    };
    this.socket = props.socket;
    this.handleStartStop = this.handleStartStop.bind(this);
    this.Click = this.Click.bind(this);
    this.SetMouseposition =  this.SetMouseposition.bind(this);
    }
    SetMouseposition(event){
this.setState({mouseX: event.clientX})
this.setState({mouseY: event.clientY})
    }
    Click(){ 
      
    this.setState({bool:true})
    this.setState({Degree:Degree._currentValue})
    //console.log(this.state.Degree)
    this.socket.emit('Attack', {mouseposition: {X:this.state.mouseX, Y:this.state.mouseY} , Degree:this.state.Degree});
  }
    handleStartStop(){  
      if(this.state.bool == true){
      //Degree._currentValue
      var firstleft = 300;
      //var Bside = -(firstleft - this.state.left)
      var firsttop= 500;
     // var Aside = firsttop - this.state.top
     var Bangle = this.state.Degree ;
      var Aangle =   90 - Bangle;
      
      var Asin = Math.sin( Aangle *Math.PI/180)
      
      var Bsin = Math.sin(Bangle*Math.PI/180);
     this.setState({Cside: this.state.Cside+=5})
      var Csin = Math.sin(90*Math.PI/180)
     // console.log( Csin);
     // console.log( Degree._currentValue)
      
      //b/0.5 = a/1; a = b/0.5*1
     // console.log(Aangle)
      //180 - 45
     //console.log(Math.tan((30 * (180 / Math.PI))))
     // a= b/0.5*1
     var  Aside =  -((this.state.Cside/ Csin )* Asin) + firsttop;
     var Bside = ((this.state.Cside/ Csin )* Bsin) + firstleft;
     //console.log(Aangle)
    //  console.log(Aside)
     // console.log(Bside)
       //this.setState({top:this.state.top - (1/2)*5  })
   if(this.state.left  < 800){
    this.setState({top:Aside  })
        this.setState({left:Bside})
   }
   else{
     //console.log(this.state.top )
   }
  }
    }
    componentDidMount() {
      window.addEventListener("click", this.Click);
      window.addEventListener("mousemove", this.SetMouseposition);
      setInterval(this.handleStartStop, 1000/25);
      this.socket.on('FriendsBullet',(data) =>{
        var table = [];
        for(var i =0;i < data.length;i++){
          
    // table[i] = {Aside: data[i].Bullets[i].Aside ,Bside: data[i].Bullets[i].Bside ,Degree: data[i].Bullets[i].Degree  };
  
    //console.log(data[i].Bullets[i].length)
    
  for(var j = 0 ;j < data[i].Bullets.length;j++)
  {
   // console.log("stava")
    //console.log(table)
    try{
    table.push({Aside: data[i].Bullets[j].Aside ,Bside: data[i].Bullets[j].Bside ,Degree: data[i].Bullets[j].Degree  });
    }
    catch{}

  };



//if( data[i].Bullets[i] != null)
  //  console.log(table)
        }  
        this.setState({FriendsBullets:table})
       // console.log(this.state.FriendsBullets)
      });
      this.socket.on('myself',(data) =>{
     //  console.log(data.x)
        //  pickeditemS = data.pickeditem;
           // this.setState({left: data.x});
           // this.setState({top : data.y});
          //  this.setState({pickitem : data.pickitem.value});
            //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
          //  console.log(data.pickitem);
          var bullets = [];
        for(var i = 0; i < data.Bullets.length;i++)  {
          if(data.Bullets[i] != null && data.Bullets[i] != undefined){
bullets.push( data.Bullets[i]);
//console.log(data.Bullets)
          }
          else{
           // console.log("it is delete :" + i)
          }
       //  console.log( data.Bullets[i]);
        }
       this.setState({MyselfBullets:bullets})
       //delete bullets;
          //    console.log(this.state.Bullets);
        });
      
   }
    render() {
      return (
        <div   >
 
  {this.state.MyselfBullets.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
  {this.state.FriendsBullets.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
        </div>
      );
    }
  }
   function OneBullet  ({top,left, Degree})  {

    return <div  >
  {/* <img  src={"commonDegrees.png"} style={{position:"absolute"  ,top: 150, left:100,}} ></img> */}  
        <img  src={"Bullet.png"} style={{position:"absolute"  ,top: top, left:left,transform: `rotate(${ Degree}deg)`}} ></img>
       
    </div>;
//style={style}
  }