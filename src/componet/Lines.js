import React, { useState , useEffect,memo ,createRef, useContext } from 'react';
import { FixedSizeList } from 'react-window';


export default class  Lines extends React.Component {


  




   
    constructor(props) {
      super(props);
      this.state = {
        x:200,
        y:200,
        top:0,
        name:"none",
        left:-70,
        scale:"1",
        arreyofattackX:0,
        arreyofattackY:0,
        image:"GOBLINWALK.gif",
        verticallines:[{x:200,y:200}],
        horizontallines:[],
        whitebox:[{x:0,y:0}],
        color:"#ff0000",
        arreys:[],
        Gold:0,
        degree:0,
        cannons:[ {
          x: 833,
          y: 290,
          type: 'Cannon',
          first: 0,
          Cside: 0,
          Bigminimun: 5000
        },
     
        {
          x: 553,
          y: 300,
          type: 'Cannon',
          first: 0,
          Cside: 0,
          Bigminimun: 5000
        },],
        buildheightwidth:20,
        build:[                
          { x: 707, y: 385, type: 'Build', first: 0 },
        
        ],
        count:0,
        XtoMove:0,
        YtoMove:0,
        downcheck:"up",
        TankBullets:[],
        wall:[],
        BigHouse:{x:693 , y:300 },
        hideUpdate:"hide",
        MouseOut:false,
        hideUpgradeBorder:"",
        GoldforCollect:0,
        InfoAboutUpdate:300,
        levelX:0,
        levelY:0,
        level:1,
        displayUpgradeButton:"",
        displayTimerButton:"none",
        distancetoUpgrade:"",
        MobsTimes:"camp is ready",
        CountofTanks:0,
        HideShop:""
      }
      this.socket = props.socket;
      this.ChangemouseCoords = this.ChangemouseCoords.bind(this);
      this.Paste = this.Paste.bind(this);
      this.Down = this.Down.bind(this);
      this.Up = this.Up.bind(this);
      this.Out = this.Out.bind(this);
      this.checkID = this.checkID.bind(this);
      this.onClick = this.onClick.bind(this);
      this.UpPaste = this.UpPaste.bind(this);
      this.LeftClickforUpdate = this.LeftClickforUpdate.bind(this);
      this.Upgrade = this.Upgrade.bind(this);
      this.Collect = this.Collect.bind(this);
      this.MakeMob = this.MakeMob.bind(this);
      this.OpenShop = this.OpenShop.bind(this);

    //  this.trys = this.trys.bind(this);
   // this.onMouseDownAccept = this.onMouseDownAccept.bind(this);
    }
    OpenShop(){
this.setState({HideShop:""})
    }
  MakeMob(){
this.socket.emit("MakeMob")
  }
    Upgrade(){
      this.socket.emit("Upgrade",)
    }
    Collect(){
this.socket.emit("Collect")
    }
    onClick(){
      var newStatebuild = this.state.whitebox;
      newStatebuild.x = 1500;
      newStatebuild.y = 500
     this.setState({buildheightwidth:60})
      this.Paste()
     
      
         
      this.socket.emit("Update",1)
    //  this.setState({Gold:this.state.Gold- 1000})
    }
    UpPaste(){
      setTimeout(()=>{ var red = this.state.whitebox;
        red.x = 1300;
        red.y = 500
  
       this.setState({buildheightwidth:80})
        this.Paste() }, 1000/25);
      
        setTimeout(()=>{ 
    
         this.setState({buildheightwidth:0})
          }, 1000/16);
      
      
      this.setState({Gold:this.state.Gold- 1000})
    }
    checkID(event){  
      if(event.target.id  == "" &&  this.state.buildheightwidth == 0 ){
      this.setState({downcheck:"down"})
      console.log("dsaaaaaaaaaaaaaadffafaf")
      event.target.id = "click"
      //event.addEventListener('contextmenu',  
        //                event => event.preventDefault()); 
      //console.log('UPSSSSSSSSSSSSSSTRA' + this.state.downcheck)
      }
      //686x335
     // console.log(event.target.id + " casdsad")
     // console.log( document.getElementById("click").offsetLeft + "ugabuga") 
     // console.log(event.target.id + " casdsad")
     // document.getElementById("click").offsetLeft = this.state.whitebox.x.toString()
    }
    Out(event){
      
      if(event.target.id  == "" &&  this.state.buildheightwidth == 0 ){
      this.setState({XtoMove:0})
      this.setState({YtoMove:0})
      }
      this.setState({MouseOut:false})
    }
    LeftClickforUpdate(x,y){
//console.log("Update X:" + x +"  Y:" + y)

console.log("Update X:" + x +"  Y:" + y)
this.socket.emit("PickBuild",{x:x,y:y});  
this.setState({levelX:x})
this.setState({levelY:y})    

this.setState({hideUpgradeBorder:true})
    }
    Down(x,y){
      //this.id = "daf" + x
      this.setState({MouseOut:true})
     // console.log(this.state.MouseOut)
      //console.log(event.srcElement.id)
      //var change =  this.state.build.find(element => element.x  == x  && element.y == y)
      if(this.state.buildheightwidth==0){
       this.setState({XtoMove:x})
      this.setState({YtoMove:y})
     // console.log(this.state.YtoMove+"YtoMove")
      }
//this.setState({downcheck:"down"})onMouseOver = {()=>this.Down(parametur.x,parametur.y )}   onMouseDown={this.checkID}  onMouseUp={this.Up}  onMouseOut={this.Out}

//console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

    }
    Up(event){
      if(this.state.buildheightwidth==0){
      this.setState({downcheck:"up"})
//console.log(this.state.downcheck)
event.target.id = ""
//console.log('UPSSSSSSSSSSSSSS' + this.state.downcheck)
//var change =  this.state.arreys.find(element => element.x  == this.state.XtoMove  && element.y == this.state.YtoMove)
try{
if(this.state.XtoMove !=0  &&  this.state.buildheightwidth == 0 ){
var change =  this.state.build.find(element => element.x  == this.state.XtoMove  && element.y == this.state.YtoMove)
change.x = this.state.whitebox.x
change.y = this.state.whitebox.y
//console.log("there")
this.socket.emit("changePlaceofBuild",{x : this.state.whitebox.x,y : this.state.whitebox.y,oldX:this.state.XtoMove,oldY:this.state.YtoMove})
var change =  this.state.arreys.find(element => element.x  == this.state.XtoMove  && element.y == this.state.YtoMove)
change.x = this.state.whitebox.x
change.y = this.state.whitebox.y

}
this.setState({XtoMove:0})
this.setState({YtoMove:0})
}catch{
  try{
  if(this.state.XtoMove !=0  &&  this.state.buildheightwidth == 0 ){
  var change =  this.state.wall.find(element => element.x  == this.state.XtoMove  && element.y == this.state.YtoMove)
change.x = this.state.whitebox.x
change.y = this.state.whitebox.y
//console.log("there")
this.socket.emit("changePlaceofBuild",{x : this.state.whitebox.x,y : this.state.whitebox.y,oldX:this.state.XtoMove,oldY:this.state.YtoMove})
this.setState({XtoMove:0})
this.setState({YtoMove:0})
  }
}catch{}}

try{
  if(this.state.XtoMove !=0  &&  this.state.buildheightwidth == 0 ){
    console.log("overthere")
    var change =  this.state.cannons.find(element => element.x  == this.state.XtoMove  && element.y == this.state.YtoMove)
    change.x = this.state.whitebox.x
    change.y = this.state.whitebox.y
   // console.log(change)
   // console.log("there")
    this.socket.emit("changePlaceofBuild",{x : this.state.whitebox.x,y : this.state.whitebox.y,oldX:this.state.XtoMove,oldY:this.state.YtoMove})
    var change =  this.state.arreys.find(element => element.x  == this.state.XtoMove  && element.y == this.state.YtoMove)
    change.x = this.state.whitebox.x
    change.y = this.state.whitebox.y
    
    }
    this.setState({XtoMove:0})
    this.setState({YtoMove:0})
}catch{

}
}
try{
  
  if(this.state.XtoMove == this.state.BigHouse.x && this.state.YtoMove == this.state.BigHouse.y ){
    console.log(this.state.XtoMove +" XtoMove" + this.state.BigHouse.x)
    console.log(" i am in &&&&&&&&&&&&&&&& ")
    var change = this.state.BigHouse
    change.x = this.state.whitebox.x
    change.y = this.state.whitebox.y
    
    this.socket.emit("changePlaceofBuild",{x : this.state.whitebox.x,y : this.state.whitebox.y,oldX:this.state.XtoMove,oldY:this.state.YtoMove})
    
  }
}catch{}
    
}

    
    trys(){
      if( this.state.buildheightwidth == 0 ){
      //console.log(this.state.downcheck)
      console.log(document.getElementById("click").style.left)
     // console.log('UPSSSSSSSSSSSSSS' + this.state.downcheck)
     if(this.state.downcheck == "down"){
      //console.log(this.state.downcheck +  document.getElementById("click").offsetLeft + "ugabuga") 
   //  var change =  this.state.build.find(element => element.x  == x + 16 && element.y == y +50)
   //change.x = this.state.whitebox.x
  // console.log(change.x)
  // change.y = this.state.whitebox.y
  if(document.getElementById("click").style.height =="60px"){
   document.getElementById("click").style.left = (this.state.whitebox.x - 16) +"px" ;
   document.getElementById("click").style.top = (this.state.whitebox.y - 50)+"px";
  }
  else{
    document.getElementById("click").style.left = (this.state.whitebox.x - 4) +"px" ;
    document.getElementById("click").style.top = (this.state.whitebox.y - 209)+"px";
  }
  if(document.getElementById("click").style.height == "80px"){
    document.getElementById("click").style.left = (this.state.whitebox.x - 16) +"px" ;
    document.getElementById("click").style.top = (this.state.whitebox.y - 50)+"px";
  }
    //var change =  this.state.arreys.find(element => element.x < event.clientX +25 && element.x > event.clientX - 25 && element.y < event.clientY +30 && element.y > event.clientY -30)
    //change.x += 50;
   //   console.log((x + y) + " event")
      if(this.state.buildheightwidth == 0){
      //this.setState({count:this.state.count+1})
     // console.log(this.state.count+"count")
      }
    }
  }
    }
    componentDidMount(){
    this.socket.on("name",(data)=>{
       this.setState({name:data})
    })
      this.socket.on('myself',(data) =>{
        this.setState({Gold: data.Gold})
       
        //  console.log(data.Gold)
           //  pickeditemS = data.pickeditem;
              // this.setState({left: data.x});
              // this.setState({top : data.y});
             //  this.setState({pickitem : data.pickitem.value});
               //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
             //  console.log(data.pickitem);
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
         // console.log(bullets)
          //delete bullets;
             //    console.log(this.state.Bullets);

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
         
           
            this.setState({arreys:MyBuild})  
            this.setState({build:MyBuild})  
           // console.log(this.state.build)
           });

      
      document.addEventListener("keydown", event => {
        if ( event.keyCode == 49) {
console.log("keycode 1")
this.setState({buildheightwidth:20})
        }
        if ( event.keyCode == 50) {
          console.log("keycode 2")
          this.setState({buildheightwidth:60})
                  }
                  if ( event.keyCode == 51) {
                    console.log("keycode 3")
                    this.setState({buildheightwidth:0})

                            }
                            if ( event.keyCode == 52) {
                              console.log("keycode 4")
                              this.setState({buildheightwidth:80})
          
                                      }
                                      if ( event.keyCode == 85) {
                                        if(this.state.hideUpdate == "none"){
                                       this.setState({hideUpdate:""})
                                        }else{
                                          this.setState({hideUpdate:"none"})
                                        }
                    console.log(this.state.hideUpdate + this.state.Gold)
                                                }
      
      })

     // this.setState({ arreys: this.state.arreys.push({x:1,y:1}) })
  //console.log((55 % 10) + "there"  )
      //console.log(document.getElementById("box").offsetLeft + 'leftoff')
     //console.log("ds")
 document.addEventListener("mousemove", this.ChangemouseCoords);
 document.addEventListener("mouseup", this.Up);
 //if(this.state.downcheck == "down")
 //document.addEventListener("mousemove",()=> this.trys(document.getElementById("click").offsetLeft,document.getElementById("click").offsetTop));
 document.addEventListener("click",  this.Paste);
 this.socket.on("Degreeonmob",(data) =>{
   this.setState({degree:data})
   //console.log(data)
 })
 this.socket.on("CountofGoldOnoneBuild",(data) =>{
 // this.setState({degree:data})
  //console.log(data)
  this.setState({CountofGoldOnoneBuild:data})
  //console.log(this.state.CountofGoldOnoneBuild + "CountofGoldOnoneBuild")
})
this.socket.on("InfoAboutUpdate",(data) =>{
  // this.setState({degree:data})
   //console.log(data)
   this.setState({InfoAboutUpdate:data})
   //console.log(this.state.CountofGoldOnoneBuild + "CountofGoldOnoneBuild")
 })
 this.socket.on("Level",(data) =>{
  // this.setState({degree:data})
   //console.log(data)
   this.setState({level:data})
   //console.log(data+"level")
   //console.log(this.state.CountofGoldOnoneBuild + "CountofGoldOnoneBuild")
 })
 this.socket.on("Upgrading",(data) =>{
 this.setState({displayUpgradeButton:"none"})
 this.setState({displayTimerButton:""})
 })
 this.socket.on("HasUpgraded",(data) =>{
  this.setState({displayUpgradeButton:""})
  this.setState({displayTimerButton:"none"})
  })
  this.socket.on("distancetoUpgrade",(data) =>{
    this.setState({distancetoUpgrade:data})
    
    })
    this.socket.on("MobsTimes",(data) =>{
      if(data !="-1d -1h -1m -1s "){
      this.setState({MobsTimes:data})
      console.log(data)
    }
    else{
       this.setState({MobsTimes:"camp is ready"})
    }
      
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
     if(this.state.MouseOut == false){
       this.setState({hideUpgradeBorder:"none"})
     }
      if(this.state.buildheightwidth == 20){
      var newStateArray = this.state.wall;
newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y,type:"wall"})

      this.setState({ wall: newStateArray })
      
    console.log( (60/10)/2 );
   // console.log(this.state.whitebox.x +"X");
  //  console.log(this.state.whitebox.y +"Y",document.getElementById("fakemob").offsetTop);
   // console.log(   document.getElementById("fakemob").style.width);
   // console.log(    document.getElementById("fakemob").style.height);
  //    console.log(this.state.arreys)
  this.socket.emit('Paste',{x:this.state.whitebox.x,y:this.state.whitebox.y
    ,offsetLeft:document.getElementById("fakemob").offsetLeft
    ,offsetTop:document.getElementById("fakemob").offsetTop
    ,width:document.getElementById("fakemob").style.width
  ,height:document.getElementById("fakemob").style.height,type:"wall"} )
      }
      if(this.state.buildheightwidth == 60){
     //   console.log(this.state.whitebox.x + "px33333333333333")
        var newStatebuild = this.state.build;
        newStatebuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y})
            //  this.setState({ build: newStatebuild })
           // var newStateArray = this.state.arreys;
       
     //   u need get it position of builds  from server
     var newStateArray = this.state.arreys;
        newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y,type:"Build"})
        newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y-10})
        newStateArray.push({x:this.state.whitebox.x+14,y:this.state.whitebox.y-10})
        newStateArray.push({x:this.state.whitebox.x-14,y:this.state.whitebox.y-10})
        newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y-20})
        newStateArray.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-5})
        newStateArray.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-5})
        newStateArray.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-15})
        newStateArray.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-15})
        var PasteBuild = [];
        PasteBuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y,type:"Build", })
        PasteBuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y-10})
        PasteBuild.push({x:this.state.whitebox.x+14,y:this.state.whitebox.y-10})
        PasteBuild.push({x:this.state.whitebox.x-14,y:this.state.whitebox.y-10})
        PasteBuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y-20})
        PasteBuild.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-5})
        PasteBuild.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-5})
        PasteBuild.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-15})
        PasteBuild.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-15})
        
        for(var i = 0; i<PasteBuild.length ; i++ ){
          if(i == 0){
          this.socket.emit('Paste',{x:PasteBuild[i].x,y:PasteBuild[i].y
            ,type:"Build", first:i , level:1, Gold:0} )
          }
          else{
            this.socket.emit('Paste',{x:PasteBuild[i].x,y:PasteBuild[i].y
            ,type:"Build", first:i} )
          }
     //     console.log(PasteBuild[i].x + "x" + PasteBuild[i].y)
        }
             // this.setState({ arreys: newStateArray })
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
      }
      if(this.state.buildheightwidth == 80){
    //    console.log(this.state.whitebox.x + "px33333333333333")
        var newStatebuild = this.state.cannons;
        newStatebuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y})
            //  this.setState({ build: newStatebuild })
           // var newStateArray = this.state.arreys;
       
     //   u need get it position of builds  from server
     var newStateArray = this.state.arreys;
        newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y,type:"Cannon",degree:45})
        newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y-10})
        newStateArray.push({x:this.state.whitebox.x+14,y:this.state.whitebox.y-10})
        newStateArray.push({x:this.state.whitebox.x-14,y:this.state.whitebox.y-10})
        newStateArray.push({x:this.state.whitebox.x,y:this.state.whitebox.y-20})
        newStateArray.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-5})
        newStateArray.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-5})
        newStateArray.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-15})
        newStateArray.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-15})
        var PasteBuild = [];
        PasteBuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y,type:"Cannon"})
        PasteBuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y-10})
        PasteBuild.push({x:this.state.whitebox.x+14,y:this.state.whitebox.y-10})
        PasteBuild.push({x:this.state.whitebox.x-14,y:this.state.whitebox.y-10})
        PasteBuild.push({x:this.state.whitebox.x,y:this.state.whitebox.y-20})
        PasteBuild.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-5})
        PasteBuild.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-5})
        PasteBuild.push({x:this.state.whitebox.x+7,y:this.state.whitebox.y-15})
        PasteBuild.push({x:this.state.whitebox.x-7,y:this.state.whitebox.y-15})
        
        for(var i = 0; i<PasteBuild.length ; i++ ){
          this.socket.emit('Paste',{x:PasteBuild[i].x,y:PasteBuild[i].y
            ,type:"Cannon", first:i,Cside:0,Bigminimun:5000} )
        }
             // this.setState({ arreys: newStateArray })
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
             newStateArray.pop()
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
      //console.log( "event")
       if(this.state.downcheck == "down" && this.state.buildheightwidth == 0 ){
         //console.log(document.getElementById("click").offsetLeft+ "event")
       //  console.log( "event")
         
      this.trys()
      
       }
      var x = this.state.whitebox.x;
      var y = this.state.whitebox.y
   if(event.clientX % 14 == 0){
     x =event.clientX ;
 //  , USE XAMMP TO  SAVE POSTION OF UR BUILD POSITION  ,SPLIT SURVER BETWEEN ATTACKER AND DEFENDER ,SURCH PLAYER TO ATTACK ,  ,NEW PAGE FOR DEFENSE,    ADD TIME FOR UPDATING HOUSES , IF U WANT TO UPDATE U WILL PAY 3xGOLD  FROM LAST PAYMENT , GET GOLD FROM ATTACK ,ADD RANK POINT , PAY FOR TANKS,ONE TANK 200 GOLD ,
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
  //{this.createTable()} { this.state.horizontallines.map((parametur) =><Horizontallines y = {parametur.y} ></Horizontallines>)}HouseHouse
  
      return (
        <div >
         

          <div style={{position:"absolute", width:100,  
    height: 50,background:"grey",display:this.state.hideUpdate,top:this.state.BigHouse.y,left:this.state.BigHouse.x,zIndex:this.state.BigHouse.y+2}}>
      <p style={{position:"absolute",top:-10}}>Gold:{this.state.Gold}</p>
              <button onClick={this.onClick} onMouseUp={this.UpPaste} style =  {{background:"green",position:"absolute",top:23,left:0}}>Update</button>
              </div>
              <div style = {{display:this.state.hideUpgradeBorder}}>
             
              <button onMouseOut={()=>this.setState({MouseOut:false})} onClick={this.Upgrade} onMouseOver={()=>this.setState({MouseOut:true})}  style =  {{background:"#B8B8B8",position:"absolute",border:" 2px solid #e7e7e7", height:80,width:80,borderRadius:"12px" ,top:640,left:659,display:this.state.displayUpgradeButton}}>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px" ,top:-12,left:12}}>{this.state.InfoAboutUpdate}</p>
              <img src = {"hammer.png"}  style =  {{position:"absolute" , height:50 ,width:50,borderRadius:"12px" ,top:10,left:15}} ></img>
              <img src = {"elexir2.png"}  style =  {{position:"absolute" , height:14 ,width:14,borderRadius:"12px" ,top:2,left:55}} ></img>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px" ,top:45,left:12}}>Upgrade</p>
              </button>
              <button onMouseOut={()=>this.setState({MouseOut:false})}  onMouseOver={()=>this.setState({MouseOut:true})}  style =  {{background:"#B8B8B8",position:"absolute",border:" 2px solid #e7e7e7", height:80,width:80,borderRadius:"12px" ,top:640,left:659,display:this.state.displayTimerButton}}>
              <p style =  {{position:"absolute",whiteSpace:"nowrap" ,height:35,width:35,borderRadius:"12px",fontSize:"10px" ,top:-12,left:10}}>{this.state.distancetoUpgrade}</p>
              <img src = {"Timer.png"}  style =  {{position:"absolute" , height:50 ,width:50,borderRadius:"12px" ,top:10,left:15}} ></img>
              
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px" ,top:45,left:8}}>Upgrading</p>
              </button>
              <button onMouseOut={()=>this.setState({MouseOut:false})} onClick={this.Collect} onMouseOver={()=>this.setState({MouseOut:true})} style =  {{background:"#B8B8B8",position:"absolute",border:" 2px solid #e7e7e7", height:80,width:80,borderRadius:"12px" ,top:640,left:750}}>              
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px" ,top:-12,left:-10}}>{this.state.CountofGoldOnoneBuild}</p>
              <img src = {"coin6.png"}  style =  {{position:"absolute" , height:40 ,width:40,borderRadius:"12px" ,top:18,left:20}} ></img>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px" ,top:45,left:18}}>Collect</p>
              </button>
                {/*Level <p>*/}
                <p style =  {{position:"absolute", height:80,width:80,borderRadius:"12px" ,top:this.state.levelY - 85 ,left:this.state.levelX - 29 ,zIndex:20000}} >level {this.state.level}</p>
              </div>
          
              <button   onClick={this.MakeMob} style =  {{background:"#B8B8B8",position:"absolute",outline:"none",color:"#fff",border:"none",cursor:"pointer",boxShadow:"0 9px #999", height:130,width:130,borderRadius:"12px" ,top:590,left:1395,display:this.state.AttackButtunhide}}>
              <img src = {"TankEnemy.png"}  style =  {{position:"absolute" ,height:70,width:70,borderRadius:"12px" ,top:20,left:26}} ></img>
              <p style =  {{position:"absolute",whiteSpace:"nowrap" ,height:35,width:35,borderRadius:"12px",fontSize:"10px" ,top:-12,left:10,color:"black"}}>{this.state.MobsTimes}</p>
              <p style =  {{position:"absolute" ,height:35,width:35,borderRadius:"12px",fontSize:"25px" ,top:60,left:37,fontFamily:"Copperplate,fantasy"}}>Tank</p>
              </button>
              <div   style =  {{background:"#B8B8B8",position:"absolute",outline:"none",color:"#fff",border:"none",cursor:"pointer", height:60,width:600,borderRadius:"12px" ,top:-10,left:1000}}>
              <div   style =  {{background:"#606060",position:"absolute",outline:"none",color:"black",border:"none",cursor:"pointer",zIndex:2, height:40,width:100,borderRadius:"12px" ,top:13,left:10}}>
              <p style =  {{position:"absolute" , color:"white",height:35,width:35,borderRadius:"12px",fontSize:"20px" ,top:-10,left:20,fontFamily:"Copperplate,fantasy"}}>{this.state.Gold}</p>
              <img src = {"coin6.png"}  style =  {{position:"absolute" , height:20 ,width:20,borderRadius:"12px" ,top:12,left:0}} ></img>
              </div>
              <div   style =  {{background:"#606060",position:"absolute",outline:"none",color:"black",border:"none",cursor:"pointer",zIndex:2, height:40,width:100,borderRadius:"12px" ,top:13,left:120}}>
              <p style =  {{position:"absolute" , color:"white",height:35,width:35,borderRadius:"12px",fontSize:"20px" ,top:-10,left:20,fontFamily:"Copperplate,fantasy"}}>{this.state.CountofTanks}</p>
              <img src = {"TankEnemy.png"}  style =  {{position:"absolute" , height:20 ,width:20,borderRadius:"12px" ,top:12,left:0}} ></img>
              </div>
             

              </div>
              <p style =  {{position:"absolute", color:"white" ,height:35,width:35,borderRadius:"12px",fontSize:"25px" ,top:-20,left:0,fontFamily:"Copperplate,fantasy"}}>Name:{this.state.name}</p>
        {this.state.TankBullets.map((number) =><OneBullet top = {number.Aside} left={number.Bside} Degree = {number.Degree - 90}></OneBullet>)}
 
    { this.state.wall.map((parametur) => <div>  <div  style={{position:"absolute" }} >
        
        <img draggable="false" src = {"firstwall2.png"} key={parametur.x,parametur.y } onMouseOver = {()=>this.Down(parametur.x,parametur.y )}   onMouseDown={this.checkID}  onMouseUp={this.Up}  onMouseOut={this.Out} style={{zIndex:parametur.y, position:"absolute" ,height:20,width:20,  top:parametur.y-209,left:parametur.x-4}}></img>
          <div   style={{position:"absolute" ,  width:9,  
     height: 9,border: "1px solid red",transform: `rotateX(45deg) rotateZ(45deg)`,zIndex:"4", top:parametur.y-200,left:parametur.x}} >
     </div>
     
        </div>
       
        </div>)}
    { this.state.arreys.map((parametur) => <WhiteBox y={parametur.y} x={parametur.x} ></WhiteBox>)}
    { this.state.build.map((parametur) =><div > 
       
      <div     style={{position:"absolute" ,  width:9,  
    height: 9,border: "1px solid red",transform: `rotateX(45deg) rotateZ(45deg)`,zIndex:"6"}} >
    </div> 
            <img  key={parametur.x,parametur.y } onMouseOver = {()=>this.Down(parametur.x,parametur.y )}  onClick={()=>this.LeftClickforUpdate(parametur.x,parametur.y )}  onMouseDown={this.checkID}  onMouseUp={this.Up}  onMouseOut={this.Out}  src = {"greenhouse1.png"} draggable="false" style={{zIndex:parametur.y, position:"absolute" ,height:60,width:45,left:parametur.x-16,top: parametur.y-50}}></img>
                
          
           
            </div>)}
    <Wall y={this.state.whitebox.y} x={this.state.whitebox.x} hide ={this.state.buildheightwidth} ></Wall>
    <Cannon y={this.state.whitebox.y} x={this.state.whitebox.x} hide ={this.state.buildheightwidth}  ></Cannon>
    <Build y={this.state.whitebox.y} x={this.state.whitebox.x} hide ={this.state.buildheightwidth}  ></Build>
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
{/**Cannon */}
{ this.state.cannons.map((parametur) =>
<div   >
<img   src={"1HalfCannon.png"} onMouseOver = {()=>this.Down(parametur.x,parametur.y )}   onMouseDown={this.checkID}  onMouseUp={this.Up}  onMouseOut={this.Out} draggable="false" style={{ position:"absolute",width:60,height:60, top:parametur.y- 35,left:parametur.x- 25, }}></img>
<img  draggable="false"   src={"2HalfCannon2.png"}style={{height:32,position:"absolute",width:40,height:40, transform: 'rotateX(45deg) rotateZ('+(parametur.degree - 90 )+'deg)', top:parametur.y- 35,left:parametur.x- 15 }}>
</img>
</div>)}
{/**Cannon questtask*/}




            
 
);
            <img  onMouseOver = {()=>this.Down(this.state.BigHouse.x,this.state.BigHouse.y )}   onMouseDown={this.checkID}  onMouseUp={this.Up}  onMouseOut={this.Out}    src = {"House.png"} draggable="false" style={{zIndex: this.state.BigHouse.y, position:"absolute" ,height:80,width:65,left:this.state.BigHouse.x-16,top: this.state.BigHouse.y-50}}></img>  
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
       if(hide==20){
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
        const  Cannon =   memo(({x , y,offsetLeft ,hide, func }) => {
          // var box =  document.getElementById("box").offsetLeft
           //console.log(x)
           //console.log(y + "y")
           // tryiedformap
         //console.log(x)
         if(hide==80){
            return  <div  id = "Cannon"style={{height:32,position:"absolute",top:y-35,left:x-25,zIndex:"2"}}>
            <img   src={"1HalfCannon.png"}style={{ position:"absolute",width:60,height:60  }}></img>
            <img id = "fakemob"  src={"2HalfCannon2.png"}style={{height:32,position:"absolute",width:40,height:40, transform: 'rotateX(45deg) rotateZ(45deg)', left:10, }}>
            </img>
            </div>
         }
             })
        const  Build =   memo(({x , y,offsetLeft ,hide, func }) => {
          // var box =  document.getElementById("box").offsetLeft
           //console.log(x)
           //console.log(y + "y")
           // tryiedformap
         //console.log(x)
         if(hide==60){
            return  <div>  <div  style={{position:"absolute" ,  top:y,left:x }} >
            <img onClick={()=>func} src = {"greenhouse1.png"}  style={{zIndex:y, position:"absolute" ,height:60,width:45,left:-16,top:-50}}></img>
              
            
         
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