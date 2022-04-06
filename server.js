const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const graphqlHTTP = require("express-graphql")
const schema = require("./schema/schema")
// our localhost port
/*
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

 This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')

  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('word', (word) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Word Changed to: ', word);
    
    io.sockets.emit('word', word);
  })
 
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')eval
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
*/
//var g =document.createElement("div")
const port = 4001;
const mysql = require('mysql')
const e = require('express')
const { Console } = require('console')
const app = express();

  var db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'gamedb'
}) 

db.connect(function(err) {              
  if(err) {                                     
    console.log('error when connecting to db:', err);
    
  }                                     
});                                     
                                       
db.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
                         
  } else {                                      
    throw err;                                  
  }
});


app.get("/justtry",(req,res)=>{
  
})
app.use("/graphql",graphqlHTTP({
  
schema,
graphiql:true
}))
// our server instance

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));
// This creates our socket using the instance of the server
const io = socketIO(server)
var SOCKET_LIST = {};
var PLAYER_LIST = {};
var Player = function(id , socket){
 var self = {
   User_Id:"none",
   name:"none",
  x:250,
  y:250,
  degree:0,
  Gold:10000,
  pickitem:{value:"-75FirstSniper" , SpecialId:Math.random()},
  id: id,
  Bag:[{Item:null} , {Item:null}, {Item:null} ,{Item:null} ,{Item:null},{Item:null},{Item:null},{Item:null},{Item: null},{Item: null}],
  pressRight:false,
  pressLeft:false,
  pressUp:false,
  pressDown:false,
  maxspeed: 3,
  Bullets:[],
  number: "" + Math.floor(10 * Math.random()),
  myquests:[],
  MyBuild:[  { x: 693, y: 300, type: 'Build', first: 0 , level:1},
  { x: 693, y: 290, type: 'Build', first: 1 },
  { x: 707, y: 290, type: 'Build', first: 2 },
  { x: 679, y: 290, type: 'Build', first: 3 },
  { x: 693, y: 280, type: 'Build', first: 4 },
  { x: 700, y: 295, type: 'Build', first: 5 },
  { x: 686, y: 295, type: 'Build', first: 6 },
  { x: 700, y: 285, type: 'Build', first: 7 },
  { x: 686, y: 285, type: 'Build', first: 8 },
    {
      x: 833,
      y: 290,
      type: 'Cannon',
      first: 0,
      Cside: 0,
      Bigminimun: 5000,
      level:1
    },
    {
      x: 833,
      y: 280,
      type: 'Cannon',
      first: 1,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 847,
      y: 280,
      type: 'Cannon',
      first: 2,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 819,
      y: 280,
      type: 'Cannon',
      first: 3,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 833,
      y: 270,
      type: 'Cannon',
      first: 4,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 840,
      y: 285,
      type: 'Cannon',
      first: 5,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 826,
      y: 285,
      type: 'Cannon',
      first: 6,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 840,
      y: 275,
      type: 'Cannon',
      first: 7,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 826,
      y: 275,
      type: 'Cannon',
      first: 8,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 553,
      y: 300,
      type: 'Cannon',
      first: 0,
      Cside: 0,
      Bigminimun: 5000,
      level:1
    },
    {
      x: 553,
      y: 290,
      type: 'Cannon',
      first: 1,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 567,
      y: 290,
      type: 'Cannon',
      first: 2,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 539,
      y: 290,
      type: 'Cannon',
      first: 3,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 553,
      y: 280,
      type: 'Cannon',
      first: 4,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 560,
      y: 295,
      type: 'Cannon',
      first: 5,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 546,
      y: 295,
      type: 'Cannon',
      first: 6,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 560,
      y: 285,
      type: 'Cannon',
      first: 7,
      Cside: 0,
      Bigminimun: 5000
    },
    {
      x: 546,
      y: 285,
      type: 'Cannon',
      first: 8,
      Cside: 0,
      Bigminimun: 5000
    },
    { x: 707, y: 385, type: 'Build', first: 0,level:1,Gold:0 },
    { x: 707, y: 375, type: 'Build', first: 1 },
    { x: 721, y: 375, type: 'Build', first: 2 },
    { x: 693, y: 375, type: 'Build', first: 3 },
    { x: 707, y: 365, type: 'Build', first: 4 },
    { x: 714, y: 380, type: 'Build', first: 5 },
    { x: 700, y: 380, type: 'Build', first: 6 },
    { x: 714, y: 370, type: 'Build', first: 7 },
    { x: 700, y: 370, type: 'Build', first: 8 }
  ],
  TankBullets:[],
  TanksPosition:[],
  CountofTank:0,
  CannonBullets:[]
 }
 
 self.updatePosition = function(){
  var myself = [];  
  myself = {x:self.x , y:self.y , maxspeed :self.maxspeed ,pickitem:{value :self.pickitem.value ,SpecialId:self.pickitem.SpecialId}, bag :self.Bag , Bullets: self.Bullets,TankBullets:self.TankBullets,TanksPosition:self.TanksPosition,MyBuild:self.MyBuild,CannonBullets:self.CannonBullets,Gold:self.Gold};
  
  socket.emit('myself',myself);
 //console.log(myself.x)
  //console.log(myself.TankBullets)

  if(self.pressRight){ 
     self.x += self.maxspeed;
    // console.log("x: " + arrey.x + " max: " +self.maxspeed+ " id:" + self.id)
  }
  if(self.pressLeft)
  self.x -= self.maxspeed;
  if(self.pressUp)
  self.y -= self.maxspeed;
  if(self.pressDown)
  self.y += self.maxspeed;
 
 }
 // self.updatePositionofBullet = function(){
//}

 Player.List[id] = self;
 return self;
}
Player.List = {};

var mobs = [];
var x = 0;
var y = 0;
var next = 0;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
for(var i = 0; i < 5 ;i++){
  y += 200;
  for(var j = 0; j < 5 ;j++){
    
    x += 200;
    mobs[next] ={x:x , y:y,ytomove:getRndInteger(-100,100) + y,xmove:getRndInteger(-100,100) + x,countofstop:0,startpositionx:x,startpositiony:y, timeforidle:0,countforstop:0};
   // console.log(mobs[next].xmove + "there")
    next++;
   // console.log(mobs[next].ytomove)
  }
  x = 0;
}
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  console.log(arr.length + "length")
  if (index  > -1) {
    arr.splice(index, 1);
    console.log(index + "index")
  }
  return arr;
}
//var random = Math.floor(Math.random() * 10);players.x
io.on('connection', function(socket){
  var id = socket.id;
var players = Player(socket.id , socket);
SOCKET_LIST[socket.id ] = socket;
  var nearpost;
  var nearpostcount = 0;
  var minimumX = 0 ;
  var minimumY =0 ;
  var Bigminimun =5000;
  var PickBuildIndex =27
 
  socket.on("PickBuild",function(date){
    var change =players.MyBuild.find(element => element.x  == date.x  && element.y == date.y)
     console.log(change);
        //console.log(players.MyBuild[players.MyBuild.indexOf(change)])
       //console.log(players.MyBuild.indexOf(change) + "Index")
       PickBuildIndex = players.MyBuild.indexOf(change)
     //change.x = date.x
    //change.y = date.y
    console.log(PickBuildIndex);
    socket.emit("CountofGoldOnoneBuild",  players.MyBuild[PickBuildIndex].Gold)
    socket.emit("InfoAboutUpdate",Iformationabout[players.MyBuild[PickBuildIndex].level-1])
    socket.emit("Level",players.MyBuild[PickBuildIndex].level)
    console.log(players.MyBuild[PickBuildIndex].level)
try{
    var Findit =players.ArreyWithUpdates.find(element => element.Buiuldforupdate == players.MyBuild[PickBuildIndex])
   // ArreyWithUpdates[i].Buiuldforupdate == players.MyBuild[PickBuildIndex]
 //  console.log(Findit)
   socket.emit("Upgrading")
}catch{
  socket.emit("HasUpgraded")
}
  })
  socket.on("Collect",function(date){
    console.log("Dads")
    players.Gold +=  players.MyBuild[PickBuildIndex].Gold;
    players.MyBuild[PickBuildIndex].Gold -= players.MyBuild[PickBuildIndex].Gold
    socket.emit("CountofGoldOnoneBuild",  players.MyBuild[PickBuildIndex].Gold)
  });
  var Iformationabout = [300,700,"soon"]
  var d = new Date();

  var ArreyWithMobs = []
  //var countDownDateMobs;
  socket.on('MakeMob', function(date){
     if(players.Gold > 50){
    if(ArreyWithMobs.length!=0 &&ArreyWithMobs[ArreyWithMobs.length-1] != undefined && ArreyWithMobs[ArreyWithMobs.length-1] != null){
      var countDownDateMobs = new Date(ArreyWithMobs[ArreyWithMobs.length-1].EndTime);
     // console.log(ArreyWithMobs[ArreyWithMobs.length-1].EndTime.getSeconds() + "seconds.length-1")
     // countDownDateMobs= ArreyWithMobs[ArreyWithMobs.length-1].EndTime
      countDownDateMobs.setSeconds((ArreyWithMobs[ArreyWithMobs.length-1].EndTime.getSeconds()  + 12))
      ArreyWithMobs.push({ EndTime:countDownDateMobs, index:ArreyWithMobs.length}) 
     // console.log(ArreyWithMobs)
    }
  
    if(ArreyWithMobs.length==0 ||  ArreyWithMobs[ArreyWithMobs.length-1] == undefined ||   ArreyWithMobs[ArreyWithMobs.length-1] == null){
      var countDownDateMobs = new Date();
    countDownDateMobs.setSeconds(countDownDateMobs.getSeconds() + 12)
    console.log(countDownDateMobs.getSeconds() + "seconds")
    ArreyWithMobs.push({ EndTime:countDownDateMobs}) 
    console.log("MakeMob")
    }
    //players.CountofTank
    players.Gold-=50
  }
  });
  setInterval(()=>{
  //console.log(ArreyWithMobs)
socket.emit("CountofTank" ,players.CountofTank);
    for(var i = 0;i<ArreyWithMobs.length ;i++ ){
  if(ArreyWithMobs[i]!= undefined && ArreyWithMobs[i]!=null){
  
     
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = ArreyWithMobs[i].EndTime - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
   //console.log(  days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
     // if(ArreyWithMobs[i].Buiuldforupdate == players.MyBuild[PickBuildIndex])
    //  socket.emit("distancetoUpgrade", days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
    // If the count down is over, write some text 
    
    if (distance < 0) { 
      delete ArreyWithMobs[i]
      //socket.emit("HasUpgraded")
      players.CountofTank ++;
      console.log( players.CountofTank + "CountofTank")
      console.log(ArreyWithMobs.length + "length");
     // players.MyBuild[PickBuildIndex].level++
     // console.log(players.MyBuild[PickBuildIndex].level + "Level")
     // socket.emit("Level",players.MyBuild[PickBuildIndex].level)
      //socket.emit("InfoAboutUpdate",Iformationabout[players.MyBuild[PickBuildIndex].level-1])
      socket.emit("MobsTimes","camp is ready")
    }
   if( i == ArreyWithMobs.length-1){
    socket.emit("MobsTimes",days + "d " + hours + "h " + minutes + "m " + seconds + "s " )
   }
  
     // console.log( s.getMinutes() + "MinutesS")
     // console.log( d.getMinutes() + "MinutesD")
      
  }
  
  
  
  }
      
  },1000)

  var ArreyWithUpdates = []
 ArreyWithUpdates.push(d.getMinutes())
 ArreyWithUpdates.splice(0)
 //ArreyWithUpdates.push(d.getMinutes())
 //console.log(ArreyWithUpdates.length + "length");
 //console.log(ArreyWithUpdates[0] + "arr1");
 console.log(27 %24 + "Procentnode 24 ")
 console.log((125 - (125%24))/24  +  "result")
console.log(135%60 + "Procentnode ")
console.log((135 - (135%60))/60  +  "result")
console.log((135 - (135%60))/60  +  "result")
//((ArreyWithUpdates[i].StartTime+ ArreyWithUpdates[i].Time) - ((ArreyWithUpdates[i].StartTime+ ArreyWithUpdates[i].Time)%60))/60 
setInterval(()=>{
  var s = new Date();
  for(var i = 0;i<ArreyWithUpdates.length ;i++ ){
  if( ArreyWithUpdates[i] != null && ArreyWithUpdates[i]!= undefined)

   
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = ArreyWithUpdates[i].StartTime - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 //console.log(  days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    if(ArreyWithUpdates[i].Buiuldforupdate == players.MyBuild[PickBuildIndex]){
    socket.emit("distancetoUpgrade", days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
    socket.emit("Upgrading")
  }
  
  console.log(("distancetoUpgrade", days + "d " + hours + "h " + minutes + "m " + seconds + "s "))
  // If the count down is over, write some text 
  if (distance < 0) {
    ArreyWithUpdates.splice(0)
    socket.emit("HasUpgraded")
    console.log(ArreyWithUpdates.length + "length");
    players.MyBuild[PickBuildIndex].level++
    console.log(players.MyBuild[PickBuildIndex].level + "Level")
    socket.emit("Level",players.MyBuild[PickBuildIndex].level)
    socket.emit("InfoAboutUpdate",Iformationabout[players.MyBuild[PickBuildIndex].level-1])
  }

   // console.log( s.getMinutes() + "MinutesS")
   // console.log( d.getMinutes() + "MinutesD")
    
  



}
    
},1000)
  socket.on("Upgrade",function(date){
    var countDownDate = new Date(); 
    var Time;
    //console.log(ArreyWithUpdates[0].Time + "Time")
   //console.log( d.getSeconds() + "Seconds")
  // console.log( s.getSeconds() + "Secondstwo")
    if( players.MyBuild[PickBuildIndex].level == 1){
      //Coins Build Cost: 300
      players.Gold -= 300 
      Time = 1;
      countDownDate.setMinutes(countDownDate.getMinutes() + Time)
      console.log(Time + "Time")
      socket.emit("Upgrading")
    }
    if( players.MyBuild[PickBuildIndex].level == 2){
      //Coins Build Cost: 700
      players.Gold -= 700
      Time = 15
      countDownDate.setMinutes(countDownDate.getMinutes() + Time)
      console.log(Time + "Time")
      socket.emit("Upgrading")
    }
  
    if(players.MyBuild[PickBuildIndex].level <3){
      var found = ArreyWithUpdates.find(element => element.Buiuldforupdate == players.MyBuild[PickBuildIndex]);
      if(found == null || found == undefined)
      ArreyWithUpdates.push({Buiuldforupdate:players.MyBuild[PickBuildIndex], StartTime:countDownDate,Time:Time}) 

      console.log(ArreyWithUpdates[0].Time + "Time for ArreyWithUpdates")
     // players.MyBuild[PickBuildIndex].level++
    //  console.log(players.MyBuild[PickBuildIndex].level + "Level")
   // socket.emit("Level",players.MyBuild[PickBuildIndex].level)
    }
    socket.emit("InfoAboutUpdate",Iformationabout[players.MyBuild[PickBuildIndex].level-1])
     // console.log(Iformationabout[players.MyBuild[PickBuildIndex].level-1] + "InfoAboutUpdate")
    //console.log(players.MyBuild[PickBuildIndex])
  });
  socket.on("changePlaceofBuild",function(date){  
    try{
    var change =players.MyBuild.find(element => element.x  == date.oldX  && element.y == date.oldY && element.first == 0)
   // console.log(date.oldX + "oldx" + date.oldY+ "oldY");
    change.x = date.x
    change.y = date.y
    if(change.type == "Build" || change.type == "Cannon" ){
  
    var change =players.MyBuild.find(element => element.x  == date.oldX  && element.y == date.oldY-10)
    change.x = date.x
    change.y = date.y-10
    var change =players.MyBuild.find(element => element.x  == date.oldX+14  && element.y == date.oldY-10)
    change.x = date.x+14 
    change.y = date.y-10
    var change =players.MyBuild.find(element => element.x  == date.oldX-14  && element.y == date.oldY-10)
    change.x = date.x-14 
    change.y = date.y-10
    var change =players.MyBuild.find(element => element.x  == date.oldX  && element.y == date.oldY-20)
    change.x = date.x
    change.y = date.y-20
    var change =players.MyBuild.find(element => element.x  == date.oldX+7  && element.y == date.oldY-5)
    change.x = date.x+7
    change.y = date.y -5
    var change =players.MyBuild.find(element => element.x  == date.oldX-7  && element.y == date.oldY-5)
    change.x = date.x-7 
    change.y = date.y-5
    var change =players.MyBuild.find(element => element.x  == date.oldX+7  && element.y == date.oldY-15)
    change.x = date.x+7 
    change.y = date.y-15
    var change =players.MyBuild.find(element => element.x  == date.oldX-7  && element.y == date.oldY-15)
    change.x = date.x-7 
    change.y = date.y-15
    Bigminimun = 5000
    minimumX = 0 ;
 minimumY =0 ;
 
  }
    // console.log("date" + date.oldX)
    //console.log("date" + date.oldY)
 // console.log(players.MyBuild)
}
catch{}
   
  })
  
  setInterval(() => {
    for(var i = 1; i < players.MyBuild.length ;i++){
    if(players.MyBuild[i]!= undefined && players.MyBuild[i].first == 0 && players.MyBuild[i].type == "Build" &&  players.MyBuild[i].level == 1  ){
   // players.Gold+=3
    //console.log(players.MyBuild[i].Gold)
   
    if(  players.MyBuild[i].Gold  < 500){
    players.MyBuild[i].Gold  += 3;
  
  
    }
    if(players.MyBuild[i].Gold  > 500){
      players.MyBuild[i].Gold  = 500;
    }
   // else{
    //  players.MyBuild[i].Gold  = 500;
    //}
   
    // Elixir Storage Capacity Limit: 500
    // Gold per 1 sec is 3
    }
    if(players.MyBuild[i]!= undefined && players.MyBuild[i].first == 0 && players.MyBuild[i].type == "Build" &&  players.MyBuild[i].level == 2 ){
      if(  players.MyBuild[i].Gold  < 1000){
        players.MyBuild[i].Gold  += 6;
      
      
        }
        if(players.MyBuild[i].Gold  > 1000){
          players.MyBuild[i].Gold  = 1000;
        }
    //  Elixir Storage Capacity Limit: 1,000
    // Gold per 1 sec is 6
      }
      if(players.MyBuild[i]!= undefined && players.MyBuild[i].first == 0 && players.MyBuild[i].type == "Build" &&  players.MyBuild[i].level == 3 ){
        if(  players.MyBuild[i].Gold  < 1500){
          players.MyBuild[i].Gold  += 10;
        
        
          }
          if(players.MyBuild[i].Gold  > 1500){
            players.MyBuild[i].Gold  = 1500;
          }
        //  console.log(players.MyBuild[i].Gold + "goldofstorige")
          //  Elixir Storage Capacity Limit: 1,500
         // Gold per 1 sec is 10
        }
    }
    // make gold mine images  , elexir mine  images, currect pick Buildfor update ,  AddUpgradeTime, Shop,ArmyCamp
    //this.socket.emit("Gold",this.state.Gold)
    /* 
    Level 1 : 60 second 3 point limit 500
    Level 2 : 60 second 6 point limit 1000
    Level 3 : 60 second 10 point limit 1500
    */
   if(players.MyBuild[PickBuildIndex] != undefined ){
   socket.emit("CountofGoldOnoneBuild",  players.MyBuild[PickBuildIndex].Gold)
   }
  },1000);
 
  socket.on('PasteMob', function(date){
   // console.log(date.x + "PasteMob")
  
   if(players.CountofTank>0){
   players.CountofTank -= 1;
   players.TanksPosition.push({x:date.x,y:date.y,Bigminimun:5000,nearpost:0,Cside:0,Move:"OffMove"})
   }
   //console.log(  players.TanksPosition[0].y )

  });
  var NextArrey = []
  var idofdefender = ""
  var MyBuild =   players.MyBuild;
  socket.on('Homelogin', function(date){
   players.MyBuild = MyBuild
    console.log("Homelogin")
  players.TanksPosition =[]
  });
  socket.on('Attacklogin', function(date){
   // MyBuild  =  players.MyBuild;
    for (var i in Player.List) {

      if(i != id  ){
  if( Player.List[i] != undefined){   
        NextArrey.push(i)
    //var player = Player.List[i];
    //console.log(Player.List[i])
   // idofdefender = i
  //  players.MyBuild = player.MyBuild
  }
    //delete Player.List[i];
   // pack.push({x:player.x,
     // y:player.y, degree:player.degree, pickitem: player.pickitem.value,Bullets:player.Bullets,TankBullets:player.TankBullets,MyBuild:player.MyBuild, TanksPosition: player.TanksPosition,TankBullets:player.TankBullets,CannonBullets:player.CannonBullets});
      //console.log("Guess X: " + player.x + "Id :" + player.id )
      //console.log(Player.List[i].Bullets)
     // packofBullets.push({Bullets:player.Bullets})
    }
  }  
  for (var i in Player.List) {

    if(i != id  ){
if( Player.List[i] != undefined){   
      NextArrey.push(i)
var player = Player.List[i];
var Build = [] ;
for(var j = 0;j<player.MyBuild.length;j++){
  if( player.MyBuild[j] !=undefined)
  Build[j] = player.MyBuild[j]
}
  //console.log(Player.List[i])
 // idofdefender = i
  players.MyBuild =  Build
  break;
}
  //delete Player.List[i];
 // pack.push({x:player.x,
   // y:player.y, degree:player.degree, pickitem: player.pickitem.value,Bullets:player.Bullets,TankBullets:player.TankBullets,MyBuild:player.MyBuild, TanksPosition: player.TanksPosition,TankBullets:player.TankBullets,CannonBullets:player.CannonBullets});
    //console.log("Guess X: " + player.x + "Id :" + player.id )
    //console.log(Player.List[i].Bullets)
   // packofBullets.push({Bullets:player.Bullets})
  }
}     
    for(var i in SOCKET_LIST){
      //delete SOCKET_LIST[i]
      if(i != id){
     // var sockets =   SOCKET_LIST[i]
      //console.log(i)
      //socket.emit("FriendsBullet",packofBullets)
    //socket.emit('FriendsPosition',pack);
    //console.log(pack[0].x )
    //sockets.emit("FriendsBullet",packofBullets)
    ///sockets.emit('FriendsPosition',pack);
    //sockets.emit('mobs',mobs);
    //console.log(mobs)
     }
    
    }
  });
  setInterval(() => {
  //  console.log(players.MyBuild.length + "id + "+ id)
   // console.log(players.MyBuild)
  }, 1000);
  next= 0;
  socket.on('NextPlayer', function(date){
    next++;
    console.log(NextArrey[next])
   // NextArrey.push(idofdefender)
   if(Player.List[NextArrey[next]]!=undefined){
    var player = Player.List[NextArrey[next]];
    //Player.List
    //console.log(Player.List[i])
    var Build = [] ;
for(var j = 0;j<player.MyBuild.length;j++){
  if( player.MyBuild[j] !=undefined)
  Build[j] = player.MyBuild[j]
}
    players.MyBuild = Build
   }else{
     if(NextArrey.length < next){
       next = 0
     }
   }
  });
  socket.on('Gold', function(date){
    players.Gold = date
  });
  socket.on('Update', function(date){
    
    players.Gold -= 1000

  });
  socket.on('Paste', function(date){

  
players.MyBuild.push(date)
//console.log("before")
//console.log(players.MyBuild)
//console.log("after")
//console.log(date)

if(players.MyBuild[0].type == "Build" ){
  
if(nearpostcount== 0){
  if(  500 <= players.MyBuild[0].x ){
  minimumX = players.MyBuild[0].x - 500
  }
  if(  500 >= players.MyBuild[0].x ){
    minimumX = 500 - players.MyBuild[0].x
    } if(  500 <= players.MyBuild[0].y ){
      minimumY = players.MyBuild[0].y - 500
      }
      if(  500 >= players.MyBuild[0].y ){
        minimumY = 500 - players.MyBuild[0].y
        }
        Bigminimun= minimumY + minimumX;
       // console.log(Bigminimun + "Bigminimun")
  nearpost= {x:players.MyBuild[0].x,y:players.MyBuild[0].y}
  nearpostcount++
}
    }
//console.log(date.offsetLeft)
//console.log(date.offsetTop)Update
//console.log(parseInt(date.width))
//console.log(players.MyBuild)

  });
   setInterval(() => { for(var j = 0; j< players.MyBuild.length ;j++ ){
     if(players.MyBuild[j] != undefined)
    if(players.MyBuild[j].type == "Cannon" && players.MyBuild[j].first == 0 ){
       var firstleft = players.MyBuild[j].x
       var firsttop = players.MyBuild[j].y 
       
             for(var i = 0;i<players.TanksPosition.length;i++ ){
              if(players.TanksPosition[i]!=undefined){
               
               var minimumX =0 ;
               var minimumY =0;
               if(  players.MyBuild[j].x <= players.TanksPosition[i].x  ){
                 minimumX = players.TanksPosition[i].x - players.MyBuild[j].x
                 }
                 if(  players.MyBuild[j].x >= players.TanksPosition[i].x ){
                   minimumX = players.MyBuild[j].x - players.TanksPosition[i].x
                   } if(  players.MyBuild[j].y <= players.TanksPosition[i].y ){
                     minimumY = players.TanksPosition[i].y - players.MyBuild[j].y
                     }
                     if(  players.MyBuild[j].y >= players.TanksPosition[i].y ){
                       minimumY = players.MyBuild[j].y - players.TanksPosition[i].y
                       }
                       if( players.MyBuild[j].Bigminimun >= minimumY + minimumX){
                         players.MyBuild[j].Bigminimun= minimumY + minimumX;
                         players.MyBuild[j].nearpost= {x:players.TanksPosition[i].x,y:players.TanksPosition[i].y}
                       var center_x = (players.MyBuild[j].x + 15) + (parseInt(32) / 2);
                 var center_y = (players.MyBuild[j].y-5) + (parseInt(32) / 2);
                 
                 var radians = Math.atan2(players.MyBuild[j].nearpost.x - center_x, players.MyBuild[j].nearpost.y - center_y);
                 var degree = (radians * (180 / Math.PI) * -1) + 90;
             socket.emit("Degreeonmob",degree  )
     //        players.MyBuild[j].degree = degree 
             players.MyBuild[j].degree = degree - 90
          //   var   Csidetank =  (((players.TankBullets[i].TargetX- players.TanksPosition[players.TankBullets[i].tankid].x)/ Bsin )* Csin)
        //  if(players.TanksPosition[j].Move == "OffMove")
        
             if(players.TanksPosition[i]!=undefined)
             var onebullet = {Degree: degree + 90, Aside: 0, Bside : 0 , Cside: 0 , firstleft : firstleft,firsttop:firsttop,Bigminimun:Bigminimun,TargetX: players.TanksPosition[i].x,TargetY: players.TanksPosition[i].y,tankid:j,TargetId:i,First:players.TanksPosition[i ].first}
             
             //console.log(players.TankBullets + "over there ")
                     }
                       //console.log(Bigminimun + "Bigminimun")
                 
             //  console.log(players.MyBuild[i].y + "y")
             
             
             if(players.TanksPosition[i]!=undefined){
              // var onebullet = {Degree: degree + 90, Aside: 0, Bside : 0 , Cside: 0 , firstleft : firstleft,firsttop:firsttop,Bigminimun:Bigminimun,TargetX: players.MyBuild[i].x,TargetY: players.MyBuild[i].y,tankid:j,TargetId:i,First:players.MyBuild[i ].first}
               
 
               var Bangle = players.MyBuild[j].degree ;
             //  var Aangle =   90 - Bangle;
               
              // var Asin = Math.sin( Aangle *Math.PI/180)
               var Csin = Math.sin(90*Math.PI/180)
               var Bsin = -Math.sin(Bangle*Math.PI/180);
              // console.log(Bsin +"Bsin" +Csin)
               var   Csidetank =  (((players.TanksPosition[i].x- players.MyBuild[j].x)/ Bsin )* Csin)
            players.MyBuild[j].Cside = Csidetank
            //console.log(    players.TanksPosition[j].Cside + "Cside")
            players.MyBuild[j].TargetY =   players.TanksPosition[i].y;
            players.MyBuild[j].TargetX =   players.TanksPosition[i].x;
          
         //   console.log( players.MyBuild[j].degree + "Cannonif(players.MyBuild[i]!=undefined)" )
 
               }
             
             //console.log(degree + "asdasd")
              } 
             }
            // if(   players.TanksPosition[j].Cside > 150){
           //  if(   players.MyBuild[j].Cside < 200)
           //  console.log( players.MyBuild[j].Cside + "Cannon")
             if(   players.MyBuild[j].Cside < 270)
             players.CannonBullets.push(onebullet);
             
           //  }
             
     }
           }
 },1000);
 setInterval(() => {
  var Arreyforcheck  = []
  for(var j = 0; j< players.MyBuild.length ;j++ ){

//console.log(Arreyforcheck.length + "bedore")
    if(players.MyBuild[j] != undefined){
      Arreyforcheck.push("alive")
    }
    if(Arreyforcheck.length == 0){
    //  console.log ("Win")
    }
  
  }
 },1000/2)
  setInterval(() => {
    
    for(var j = 0; j< players.TanksPosition.length ;j++ ){
   if( players.TanksPosition[j] != undefined){
var firstleft = players.TanksPosition[j].x 
var firsttop = players.TanksPosition[j].y 

      for(var i = 0;i<players.MyBuild.length;i++ ){
       if(players.MyBuild[i]!=undefined)
        if(players.MyBuild[i].type == "Build" || players.MyBuild[i].type == "Cannon"){
        var minimumX =0 ;
        var minimumY =0;
        if(  players.TanksPosition[j].x <= players.MyBuild[i].x  ){
          minimumX = players.MyBuild[i].x - players.TanksPosition[j].x
          }
          if(  players.TanksPosition[j].x >= players.MyBuild[i].x ){
            minimumX = players.TanksPosition[j].x - players.MyBuild[i].x
            } if(  players.TanksPosition[j].y <= players.MyBuild[i].y ){
              minimumY = players.MyBuild[i].y - players.TanksPosition[j].y
              }
              if(  players.TanksPosition[j].y >= players.MyBuild[i].y ){
                minimumY = players.TanksPosition[j].y - players.MyBuild[i].y
                }
                if( players.TanksPosition[j].Bigminimun >= minimumY + minimumX){
                  players.TanksPosition[j].Bigminimun= minimumY + minimumX;
                  players.TanksPosition[j].nearpost= {x:players.MyBuild[i].x,y:players.MyBuild[i].y}
                var center_x = (players.TanksPosition[j].x + 15) + (parseInt(32) / 2);
          var center_y = (players.TanksPosition[j].y-5) + (parseInt(32) / 2);
          
          var radians = Math.atan2(players.TanksPosition[j].nearpost.x - center_x, players.TanksPosition[j].nearpost.y - center_y);
          var degree = (radians * (180 / Math.PI) * -1) + 90;
      socket.emit("Degreeonmob",degree )
      players.TanksPosition[j].degree = degree - 90
   //   var   Csidetank =  (((players.TankBullets[i].TargetX- players.TanksPosition[players.TankBullets[i].tankid].x)/ Bsin )* Csin)
 //  if(players.TanksPosition[j].Move == "OffMove")
 
      if(players.MyBuild[i]!=undefined)
      var onebullet = {Degree: degree + 90, Aside: 0, Bside : 0 , Cside: 0 , firstleft : firstleft,firsttop:firsttop,Bigminimun:Bigminimun,TargetX: players.MyBuild[i].x,TargetY: players.MyBuild[i].y,tankid:j,TargetId:i,First:players.MyBuild[i ].first}
      
      //console.log(players.TankBullets + "over there ")
              }
                //console.log(Bigminimun + "Bigminimun")
          
      //  console.log(players.MyBuild[i].y + "y")
      
      
      
      //console.log(degree + "asdasd")
             }
      }
     // if(   players.TanksPosition[j].Cside > 150){
      if(   players.TanksPosition[j].Cside < 150)
      players.TankBullets.push(onebullet);
     // console.log( players.TanksPosition[j].Cside)
    //  }
      
    }
    }
    

    for(var i = 0;i<players.MyBuild.length;i++ ){
//console.log(players.MyBuild[i].type + i)
if(players.MyBuild[i] != undefined)
      if(players.MyBuild[i].type == "Build"  || players.MyBuild[i].type == "Cannon" ){
      var minimumX =0 ;
      var minimumY =0;
      if(  500 <= players.MyBuild[i].x  ){
        minimumX = players.MyBuild[i].x - 500
        }
        if(  500 >= players.MyBuild[i].x ){
          minimumX = 500 - players.MyBuild[i].x
          } if(  500 <= players.MyBuild[i].y ){
            minimumY = players.MyBuild[i].y - 500
            }
            if(  500 >= players.MyBuild[i].y ){
              minimumY = 500 - players.MyBuild[i].y
              }
              if( Bigminimun >= minimumY + minimumX){
              Bigminimun= minimumY + minimumX;
              nearpost= {x:players.MyBuild[i].x,y:players.MyBuild[i].y}
              var center_x = (500 + 15) + (parseInt(32) / 2);
        var center_y = (500-5) + (parseInt(32) / 2);
        
        var radians = Math.atan2(nearpost.x - center_x, nearpost.y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 90;
    socket.emit("Degreeonmob",degree )
   // var onebullet = {Degree: degree + 90, Aside: 0, Bside : 0 , Cside: 0 , firstleft : 516,firsttop:516,Bigminimun:Bigminimun,TargetX: players.MyBuild[i].x,TargetY: players.MyBuild[i].y,First:players.MyBuild[j ].first}
   // players.TankBullets.push(onebullet);
    //console.log(players.TankBullets + "over there ")
            }
              //console.log(Bigminimun + "Bigminimun")
        
    //  console.log(players.MyBuild[i].y + "y")
    
    
    
    //console.log(degree + "asdasd")
           }
    }
    },1000);
    setInterval(() => {
      for(var j = 0; j< players.TanksPosition.length ;j++ ){
        //var firstleft = players.TanksPosition[j].x 
       // var firsttop = players.TanksPosition[j].y 
       if(players.TanksPosition[j] != undefined)
  // console.log( players.TanksPosition[j].Cside + "id :"+ j )
       if(players.TanksPosition[j] != undefined)
              for(var i = 0;i<players.MyBuild.length;i++ ){
               if(players.MyBuild[i]!=undefined)
                if(players.MyBuild[i].type == "Build"  || players.MyBuild[i].type == "Cannon"){
                var minimumX =0 ;
                var minimumY =0;
                if(  players.TanksPosition[j].x <= players.MyBuild[i].x  ){
                  minimumX = players.MyBuild[i].x - players.TanksPosition[j].x
                  }
                  if(  players.TanksPosition[j].x >= players.MyBuild[i].x ){
                    minimumX = players.TanksPosition[j].x - players.MyBuild[i].x
                    } if(  players.TanksPosition[j].y <= players.MyBuild[i].y ){
                      minimumY = players.MyBuild[i].y - players.TanksPosition[j].y
                      }
                      if(  players.TanksPosition[j].y >= players.MyBuild[i].y ){
                        minimumY = players.TanksPosition[j].y - players.MyBuild[i].y
                        }
                        if( players.TanksPosition[j].Bigminimun >= minimumY + minimumX){
                          players.TanksPosition[j].Bigminimun= minimumY + minimumX;
                          players.TanksPosition[j].nearpost= {x:players.MyBuild[i].x,y:players.MyBuild[i].y}
                        var center_x = (players.TanksPosition[j].x + 15) + (parseInt(32) / 2);
                  var center_y = (players.TanksPosition[j].y-5) + (parseInt(32) / 2);
                  
                  var radians = Math.atan2(players.TanksPosition[j].nearpost.x - center_x, players.TanksPosition[j].nearpost.y - center_y);
                  var degree = (radians * (180 / Math.PI) * -1) + 90;
              socket.emit("Degreeonmob",degree )
              players.TanksPosition[j].degree = degree - 90
           //   var   Csidetank =  (((players.TankBullets[i].TargetX- players.TanksPosition[players.TankBullets[i].tankid].x)/ Bsin )* Csin)
         //  if(players.TanksPosition[j].Move == "OffMove")
         
              if(players.MyBuild[i]!=undefined){
             // var onebullet = {Degree: degree + 90, Aside: 0, Bside : 0 , Cside: 0 , firstleft : firstleft,firsttop:firsttop,Bigminimun:Bigminimun,TargetX: players.MyBuild[i].x,TargetY: players.MyBuild[i].y,tankid:j,TargetId:i,First:players.MyBuild[i ].first}
              

              var Bangle = players.TanksPosition[j].degree ;
            //  var Aangle =   90 - Bangle;
              
             // var Asin = Math.sin( Aangle *Math.PI/180)
              var Csin = Math.sin(90*Math.PI/180)
              var Bsin = -Math.sin(Bangle*Math.PI/180);
             // console.log(Bsin +"Bsin" +Csin)
              var   Csidetank =  (((players.MyBuild[i].x- players.TanksPosition[j].x)/ Bsin )* Csin)
           players.TanksPosition[j].Cside = Csidetank
           //console.log(    players.TanksPosition[j].Cside + "Cside")
           players.TanksPosition[j].TargetY =   players.MyBuild[i].y;
           players.TanksPosition[j].TargetX =   players.MyBuild[i].x;
         


              }
          // players.TanksPosition[players.TankBullets[i].tankid].TargetId  = players.TankBullets[i].TargetId
              //console.log(players.TankBullets + "over there ")
                      }
                        //console.log(Bigminimun + "Bigminimun")
                  
              //  console.log(players.MyBuild[i].y + "y")
              
              
              
              //console.log(degree + "asdasd")
                     }
              }
          //    players.TankBullets.push(onebullet);
          if(players.TanksPosition[j] != undefined){
          if(   players.TanksPosition[j].Cside > 150){
            if(players.TanksPosition[j].y < players.TanksPosition[j].TargetY ){
             players.TanksPosition[j].y += 3 ;
           //  console.log(i + "i"  +j +"j")
            }
            if(players.TanksPosition[j].y > players.TanksPosition[j].TargetY ){
             players.TanksPosition[j].y -= 3 ;
           //  console.log(i + "i"  +j +"j")
            }
            if(players.TanksPosition[j].x < players.TanksPosition[j].TargetX){
             players.TanksPosition[j].x += 3 ;
          //   console.log(i + "i"  +j +"j")
            }
            if(players.TanksPosition[j].x > players.TanksPosition[j].TargetX ){
             players.TanksPosition[j].x -= 3 ;
            // console.log(i + "i"  +j +"j")
            }
          }
        }
         //  var Aside = firsttop - this.state.top
         /*
          var Bangle = players.TankBullets[i].Degree ;
           var Aangle =   90 - Bangle;
           
           var Asin = Math.sin( Aangle *Math.PI/180)
           
           var Bsin = Math.sin(Bangle*Math.PI/180);
           
      //     players.TanksPosition[players.TankBullets[i].tankid].Cside = "newCside";
          // console.log(players.TanksPosition[players.TankBullets[i].tankid].Cside)
           var   Cside =  (((players.TankBullets[i].TargetX- firstleft)/ Bsin )* Csin)
           var   Csidetank =  (((players.TankBullets[i].TargetX- players.TanksPosition[players.TankBullets[i].tankid].x)/ Bsin )* Csin)
           players.TanksPosition[players.TankBullets[i].tankid].Cside = Csidetank
           players.TanksPosition[players.TankBullets[i].tankid].TargetId  = players.TankBullets[i].TargetId
        
           players.TankBullets[i].Cside += 5;
   
           
           var Csin = Math.sin(90*Math.PI/180)
           
        
          var  Aside =  -((players.TankBullets[i].Cside/ Csin )* Asin) + firsttop;
          var Bside = (( players.TankBullets[i].Cside/ Csin )* Bsin)  + firstleft;
        
         
            players.TankBullets[i].Aside =  Aside;
            players.TankBullets[i].Bside =  Bside;
           */
            }

    },1000/25);
    setInterval(() => {
      // console.log(players.TankBullets)
       for(var i = 0 ; i <  players.CannonBullets.length;i++){
        // console.log(players.Bullets[i])
       
   if( players.CannonBullets[i] != undefined){
     var stopTop = "dontstop";
     var stopLeft = "dontstop";
     // top = {number.Aside} left={number.Bside}

  
    if(players.CannonBullets[i].firstleft != 516 ){
//console.log(stopLeft +": Left ," + stopTop + ": Top" + "I : " + i)
    }
        if(players.CannonBullets[i].Cside  < 2000 ){
        
      // var g = document.createElement('div');
        //   g.id = 'someId';
        //   g.position ="absolute";
         //  g.top=  Aside+ "px";
   //console.log(g.top)
         //Degree._currentValue
        /// console.log(players.TankBullets[i].TargetId )
         var firstleft = players.CannonBullets[i].firstleft;
        // var Bside = -(firstleft - this.state.left)
         var firsttop= players.CannonBullets[i].firsttop;
       //  var Aside = firsttop - this.state.top
        var Bangle = players.CannonBullets[i].Degree ;
         var Aangle =   90 - Bangle;
         
         var Asin = Math.sin( Aangle *Math.PI/180)
         
         var Bsin = Math.sin(Bangle*Math.PI/180);
         
    //     players.TanksPosition[players.TankBullets[i].tankid].Cside = "newCside";
        // console.log(players.TanksPosition[players.TankBullets[i].tankid].Cside)
        if(players.MyBuild[players.CannonBullets[i].tankid] != undefined){
         var   Cside =  (((players.CannonBullets[i].TargetX- firstleft)/ Bsin )* Csin)
         //console.log(players.TanksPosition[players.CannonBullets[i].tankid] )
        // console.log("CannonAttack")
         var   Csidetank =  (((players.CannonBullets[i].TargetX- players.MyBuild[players.CannonBullets[i].tankid].x)/ Bsin )* Csin)
         players.MyBuild[players.CannonBullets[i].tankid].Cside = Csidetank
         players.MyBuild[players.CannonBullets[i].tankid].TargetId  = players.CannonBullets[i].TargetId
      
         players.CannonBullets[i].Cside += 5;
     //    console.log(Cside + "in if")
        }
         
       
        //   console.log(Cside)
       //   console.log( players.TankBullets[i].tankid + 1  + "tankid" + i) TargetId
    
         /// players.TanksPosition[players.TankBullets[i].tankid].y += 5 ;
       //   players.TanksPosition[players.TankBullets[i].tankid].x += 5;
         // console.log(players.TanksPosition[players.TankBullets[i].tankid].Cside + "tankCside")
         
         var Csin = Math.sin(90*Math.PI/180)
         //console.log( Csin);
        // console.log( Degree._currentValue)
         
         //b/0.5 = a/1; a = b/0.5*1
        // console.log(Aangle)
         //180 - 45
        //console.log(Math.tan((30 * (180 / Math.PI))))
        // a= b/0.5*1
      
        var  Aside =  -((players.CannonBullets[i].Cside/ Csin )* Asin) + firsttop;
        var Bside = (( players.CannonBullets[i].Cside/ Csin )* Bsin)  + firstleft;
        //console.log(Aangle)
       //  console.log(Aside)
        // console.log(Bside)
          //this.setState({top:this.state.top - (1/2)*5  })
       
          players.CannonBullets[i].Aside =  Aside;
          players.CannonBullets[i].Bside =  Bside;
        
     
      //    var  AsideOftank =  -((players.TanksPosition[players.TankBullets[i].tankid].Cside/ Csin )* Asin) + firsttop
      //    var  BsideOftank =  ((players.TanksPosition[players.TankBullets[i].tankid].Cside/ Csin )* Asin) + firsttop
      //    console.log(firsttop + "firsttop")
        // players.TanksPosition[players.TankBullets[i].tankid].y = AsideOftank;
       //  players.TanksPosition[players.TankBullets[i].tankid].x =    BsideOftank
      //   console.log()

        
          // console.log(players.TankBullets[i].Cside )
      }
      //TargetX
      //(players.MyBuild[i] != undefined)
    //  console.log(players.TankBullets[i].TargetX + "TargetX")
      var   Cside =  (((players.CannonBullets[i].TargetX- firstleft)/ Bsin )* Csin)
    //  console.log(Cside + "Cside")
     // if(players.MyBuild[i] != undefined)
      if(Cside < players.CannonBullets[i].Cside ){
      //  stopLeft="stop"
      //  stopTop="stop"
      }

     // if(players.CannonBullets[i].Bside < players.CannonBullets[i].TargetX +40 &&  players.CannonBullets[i].Bside > players.CannonBullets[i].TargetX  - 40)
      if(players.CannonBullets[i].Aside < players.CannonBullets[i].TargetY +40 &&  players.CannonBullets[i].Aside > players.CannonBullets[i].TargetY  - 40 && players.CannonBullets[i].Bside < players.CannonBullets[i].TargetX +40 &&  players.CannonBullets[i].Bside > players.CannonBullets[i].TargetX  - 40){
        stopLeft="stop"
        stopTop="stop"
      }
      
     // if(firstleft >  players.TankBullets[i].TargetX && players.TankBullets[i].TargetX>  players.TankBullets[i].Bside)stopLeft="stop"

    //  if(firstleft <   players.TankBullets[i].TargetX &&  players.TankBullets[i].TargetX<  players.TankBullets[i].Bside)stopLeft="stop"
    // if(firstleft <  players.MyBuild[players.TankBullets[i].TargetId].x && players.MyBuild[players.TankBullets[i].TargetId].x >  players.TankBullets[i].Bside)stopLeft="stop"
  //   console.log(stopLeft)
    // if(firsttop < players.TankBullets[i].TargetY  &&  players.TankBullets[i].TargetY < players.TankBullets[i].Aside)stopTop="stop"

   //  if(firsttop >  players.TankBullets[i].TargetY && players.TankBullets[i].TargetY  >  players.TankBullets[i].Aside)stopTop="stop"
     //console.log(stopTop)
    //  console.log(stopTop +" - Top , "+ stopLeft + "-Left")
      if(  stopTop == "stop" && stopLeft == "stop"){
  //   console.log(players.MyBuild[players.TankBullets[i].TargetId].x + " there")
     //   removeItemOnce(players.MyBuild,players.MyBuild[players.TankBullets[i].TargetId])
  //   console.log( players.MyBuild.indexOf(players.MyBuild[players.TankBullets[i].TargetId]) + "id" + players.MyBuild[players.TankBullets[i].TargetId].first)
       // players.MyBuild.splice(players.TankBullets[i].TargetId)
       
     //   console.log(players.TankBullets[i].TargetId + "ID")
     //   console.log(players.MyBuild.length + "lenght")first
//     players.MyBuild[players.TankBullets[i].TargetId].type = "destroy"
// for(var j = 0; j < 8;j++){
// console.log(  players.TankBullets[i].TargetId + "id of Build , "  +players.TankBullets[i].tankid  +"tank id ,"   +  players.MyBuild[players.TankBullets[i].TargetId ].first)&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 // players.MyBuild[players.TankBullets[i].TargetId - players.MyBuild[players.TankBullets[i].tankid ].first ].type  = "destroy"
//  players.MyBuild[players.TankBullets[i].TargetId - players.MyBuild[players.TankBullets[i].TargetId ].first + j].type = "destroy"
//}
//console.log(players.TankBullets[i].TargetId - players.MyBuild[players.TankBullets[i].TargetId ].first)&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// console.log(players.MyBuild[players.TankBullets[i].TargetId ].first + "First" + players.TankBullets[i].tankid)
  // players.TanksPosition[players.TankBullets[i].tankid].nearpost.x = 0;
 //   players.TanksPosition[players.TankBullets[i].tankid].nearpost.y = 0;
  //  players.TanksPosition[players.TankBullets[i].tankid].Bigminimun = 5000;
  if(players.TanksPosition[players.CannonBullets[i].TargetId ] != undefined){
  //  console.log(players.MyBuild[players.TankBullets[i].TargetId ])
  for(var j = 0 ; j <9; j++){
  //  console.log(players.TankBullets[i].First + "j" +j +"i" + players.TankBullets[i].First  + "delete" +( players.TankBullets[i].TargetId - players.TankBullets[i].First  + j))
   // if(players.CannonBullets[i].First != j){
   //   console.log(players.TankBullets[i].TargetId + "id")
  //  delete  players.TanksPosition[players.CannonBullets[i].TargetId - players.CannonBullets[i].First  + j]
   // }
  }
// console.log(players.MyBuild[players.TankBullets[i].TargetId].x + "targetX")
// console.log(  players.TanksPosition[players.TankBullets[i].tankid].x + "TankX")
//console.log(( players.TankBullets[i].Bside) + "Bside")
//console.log(  (players.MyBuild[players.CannonBullets[i].TargetId].x  )+ "bside")
//console.log(( players.TankBullets[i].Aside ) + "Aside")
//console.log(firstleft +"firstLeft")
//console.log(firsttop +"firstTop")
// var   Cside =  ((Aside/ Asin )* Csin)
var  Aside2 =  -((players.CannonBullets[i].Cside/ Csin )* Asin)
var Bside2 = (( players.CannonBullets[i].Cside/ Csin )* Bsin);
//var   Cside =  (((players.MyBuild[players.CannonBullets[i].TargetId].x- firstleft)/ Bsin )* Csin)
// console.log(Aside2 + "Aside2")

// console.log(Bside2 + "Bside2")
//console.log(Cside + "Cside from calculate")
//console.log(  (players.MyBuild[players.TankBullets[i].TargetId].y )+ "aside")
// console.log(players.TankBullets[i].Cside + "Cside")
 //Bangle
// console.log(Aangle + "Aangle")
//console.log(Bangle + "Bangle")
//console.log(Csin + "Csin")
      delete  players.TanksPosition[players.CannonBullets[i].TargetId  ]
    //  players.CannonBullets[players.CannonBullets[i].tankid].Bigminimun = 5000
    //  players.TanksPosition[players.TankBullets[i].tankid].nearpost.x =5000
   //   players.TanksPosition[players.TankBullets[i].tankid].nearpost.y = 5000
}
for(var x = 0 ; x < players.CannonBullets.length; x++){
  if(players.CannonBullets[x] != undefined &&  players.CannonBullets[i] != undefined)
  if(  players.CannonBullets[i].TargetId == players.CannonBullets[x].TargetId){
    delete   players.CannonBullets[x]
  }

  }
delete  players.CannonBullets[i] ;  
      }
     }
       }
     }, 1000/25);
    setInterval(() => {
        // console.log(players.TankBullets)
         for(var i = 0 ; i <  players.TankBullets.length;i++){
          // console.log(players.Bullets[i])
         
     if( players.TankBullets[i] != undefined &&  players.TanksPosition[players.TankBullets[i].tankid]){
       var stopTop = "dontstop";
       var stopLeft = "dontstop";
       // top = {number.Aside} left={number.Bside}
 
    
      if(players.TankBullets[i].firstleft != 516 ){
//console.log(stopLeft +": Left ," + stopTop + ": Top" + "I : " + i)
      }
          if(players.TankBullets[i].Cside  < 2000 ){
          
        // var g = document.createElement('div');
          //   g.id = 'someId';
          //   g.position ="absolute";
           //  g.top=  Aside+ "px";
     //console.log(g.top)
           //Degree._currentValue
          /// console.log(players.TankBullets[i].TargetId )
           var firstleft = players.TankBullets[i].firstleft;
          // var Bside = -(firstleft - this.state.left)
           var firsttop= players.TankBullets[i].firsttop;
         //  var Aside = firsttop - this.state.top
          var Bangle = players.TankBullets[i].Degree ;
           var Aangle =   90 - Bangle;
           
           var Asin = Math.sin( Aangle *Math.PI/180)
           
           var Bsin = Math.sin(Bangle*Math.PI/180);
           
      //     players.TanksPosition[players.TankBullets[i].tankid].Cside = "newCside";
          // console.log(players.TanksPosition[players.TankBullets[i].tankid].Cside)
           var   Cside =  (((players.TankBullets[i].TargetX- firstleft)/ Bsin )* Csin)
           var   Csidetank =  (((players.TankBullets[i].TargetX- players.TanksPosition[players.TankBullets[i].tankid].x)/ Bsin )* Csin)
           players.TanksPosition[players.TankBullets[i].tankid].Cside = Csidetank
           players.TanksPosition[players.TankBullets[i].tankid].TargetId  = players.TankBullets[i].TargetId
        
           players.TankBullets[i].Cside += 5;
       //    console.log(Cside + "in if")
           
         
          //   console.log(Cside)
         //   console.log( players.TankBullets[i].tankid + 1  + "tankid" + i) TargetId
      
           /// players.TanksPosition[players.TankBullets[i].tankid].y += 5 ;
         //   players.TanksPosition[players.TankBullets[i].tankid].x += 5;
           // console.log(players.TanksPosition[players.TankBullets[i].tankid].Cside + "tankCside")
           
           var Csin = Math.sin(90*Math.PI/180)
           //console.log( Csin);
          // console.log( Degree._currentValue)
           
           //b/0.5 = a/1; a = b/0.5*1
          // console.log(Aangle)
           //180 - 45
          //console.log(Math.tan((30 * (180 / Math.PI))))
          // a= b/0.5*1
        
          var  Aside =  -((players.TankBullets[i].Cside/ Csin )* Asin) + firsttop;
          var Bside = (( players.TankBullets[i].Cside/ Csin )* Bsin)  + firstleft;
          //console.log(Aangle)
         //  console.log(Aside)
          // console.log(Bside)
            //this.setState({top:this.state.top - (1/2)*5  })
         
            players.TankBullets[i].Aside =  Aside;
            players.TankBullets[i].Bside =  Bside;
          
       
        //    var  AsideOftank =  -((players.TanksPosition[players.TankBullets[i].tankid].Cside/ Csin )* Asin) + firsttop
        //    var  BsideOftank =  ((players.TanksPosition[players.TankBullets[i].tankid].Cside/ Csin )* Asin) + firsttop
        //    console.log(firsttop + "firsttop")
          // players.TanksPosition[players.TankBullets[i].tankid].y = AsideOftank;
         //  players.TanksPosition[players.TankBullets[i].tankid].x =    BsideOftank
        //   console.log()

          
            // console.log(players.TankBullets[i].Cside )
        }
        //TargetX
        //(players.MyBuild[i] != undefined)
      //  console.log(players.TankBullets[i].TargetX + "TargetX")
        var   Cside =  (((players.TankBullets[i].TargetX- firstleft)/ Bsin )* Csin)
      //  console.log(Cside + "Cside")
       // if(players.MyBuild[i] != undefined)
       /*
        if(Cside < players.TankBullets[i].Cside ){
          stopLeft="stop"
          stopTop="stop"
        }
        */
        if(players.TankBullets[i].Aside < players.TankBullets[i].TargetY +40 &&  players.TankBullets[i].Aside > players.TankBullets[i].TargetY  - 40 && players.TankBullets[i].Bside < players.TankBullets[i].TargetX +40 &&  players.TankBullets[i].Bside > players.TankBullets[i].TargetX  - 40){
          stopLeft="stop"
          stopTop="stop"
          players.Gold+=1000
        }
       // if(firstleft >  players.TankBullets[i].TargetX && players.TankBullets[i].TargetX>  players.TankBullets[i].Bside)stopLeft="stop"

      //  if(firstleft <   players.TankBullets[i].TargetX &&  players.TankBullets[i].TargetX<  players.TankBullets[i].Bside)stopLeft="stop"
      // if(firstleft <  players.MyBuild[players.TankBullets[i].TargetId].x && players.MyBuild[players.TankBullets[i].TargetId].x >  players.TankBullets[i].Bside)stopLeft="stop"
    //   console.log(stopLeft)
      // if(firsttop < players.TankBullets[i].TargetY  &&  players.TankBullets[i].TargetY < players.TankBullets[i].Aside)stopTop="stop"

     //  if(firsttop >  players.TankBullets[i].TargetY && players.TankBullets[i].TargetY  >  players.TankBullets[i].Aside)stopTop="stop"
       //console.log(stopTop)
      //  console.log(stopTop +" - Top , "+ stopLeft + "-Left")
        if(  stopTop == "stop" && stopLeft == "stop"){
    //   console.log(players.MyBuild[players.TankBullets[i].TargetId].x + " there")
       //   removeItemOnce(players.MyBuild,players.MyBuild[players.TankBullets[i].TargetId])
    //   console.log( players.MyBuild.indexOf(players.MyBuild[players.TankBullets[i].TargetId]) + "id" + players.MyBuild[players.TankBullets[i].TargetId].first)
         // players.MyBuild.splice(players.TankBullets[i].TargetId)
         
       //   console.log(players.TankBullets[i].TargetId + "ID")
       //   console.log(players.MyBuild.length + "lenght")first
  //     players.MyBuild[players.TankBullets[i].TargetId].type = "destroy"
 // for(var j = 0; j < 8;j++){
  // console.log(  players.TankBullets[i].TargetId + "id of Build , "  +players.TankBullets[i].tankid  +"tank id ,"   +  players.MyBuild[players.TankBullets[i].TargetId ].first)&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   // players.MyBuild[players.TankBullets[i].TargetId - players.MyBuild[players.TankBullets[i].tankid ].first ].type  = "destroy"
 //  players.MyBuild[players.TankBullets[i].TargetId - players.MyBuild[players.TankBullets[i].TargetId ].first + j].type = "destroy"
//}
//console.log(players.TankBullets[i].TargetId - players.MyBuild[players.TankBullets[i].TargetId ].first)&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 // console.log(players.MyBuild[players.TankBullets[i].TargetId ].first + "First" + players.TankBullets[i].tankid)
    // players.TanksPosition[players.TankBullets[i].tankid].nearpost.x = 0;
   //   players.TanksPosition[players.TankBullets[i].tankid].nearpost.y = 0;
    //  players.TanksPosition[players.TankBullets[i].tankid].Bigminimun = 5000;
    if(players.MyBuild[players.TankBullets[i].TargetId ] != undefined){
    //  console.log(players.MyBuild[players.TankBullets[i].TargetId ])
    for(var j = 0 ; j <9; j++){
    //  console.log(players.TankBullets[i].First + "j" +j +"i" + players.TankBullets[i].First  + "delete" +( players.TankBullets[i].TargetId - players.TankBullets[i].First  + j))
      if(players.TankBullets[i].First != j){
     //   console.log(players.TankBullets[i].TargetId + "id")
      delete  players.MyBuild[players.TankBullets[i].TargetId - players.TankBullets[i].First  + j]
      }
    }
 // console.log(players.MyBuild[players.TankBullets[i].TargetId].x + "targetX")
 // console.log(  players.TanksPosition[players.TankBullets[i].tankid].x + "TankX")
  //console.log(( players.TankBullets[i].Bside) + "Bside")
  console.log(  (players.MyBuild[players.TankBullets[i].TargetId].x  )+ "bside")
  //console.log(( players.TankBullets[i].Aside ) + "Aside")
  //console.log(firstleft +"firstLeft")
  //console.log(firsttop +"firstTop")
 // var   Cside =  ((Aside/ Asin )* Csin)
  var  Aside2 =  -((players.TankBullets[i].Cside/ Csin )* Asin)
  var Bside2 = (( players.TankBullets[i].Cside/ Csin )* Bsin);
  var   Cside =  (((players.MyBuild[players.TankBullets[i].TargetId].x- firstleft)/ Bsin )* Csin)
 // console.log(Aside2 + "Aside2")
 
 // console.log(Bside2 + "Bside2")
  //console.log(Cside + "Cside from calculate")
  //console.log(  (players.MyBuild[players.TankBullets[i].TargetId].y )+ "aside")
 // console.log(players.TankBullets[i].Cside + "Cside")
   //Bangle
 // console.log(Aangle + "Aangle")
  //console.log(Bangle + "Bangle")
  //console.log(Csin + "Csin")
 
        delete  players.MyBuild[players.TankBullets[i].TargetId  ]
        players.TanksPosition[players.TankBullets[i].tankid].Bigminimun = 5000
      
      //  players.TanksPosition[players.TankBullets[i].tankid].nearpost.x =5000
     //   players.TanksPosition[players.TankBullets[i].tankid].nearpost.y = 5000
  }
  for(var x = 0 ; x < players.TankBullets.length; x++){
    if(players.TankBullets[x] != undefined )
    if(  players.TankBullets[i].TargetId == players.TankBullets[x].TargetId){
      if(players.TanksPosition[players.TankBullets[x].tankid]!= undefined)
      players.TanksPosition[players.TankBullets[x].tankid].Bigminimun = 5000
    }
  
    }
    for(var x = 0 ; x < players.TankBullets.length; x++){
      if(players.TankBullets[x] != undefined  && players.TankBullets[i] != undefined)
      if(  players.TankBullets[i].TargetId == players.TankBullets[x].TargetId){
        delete   players.TankBullets[x]
      }
    
      }
  delete  players.TankBullets[i] ;  
        }
       }
         }
       }, 1000/25);
  setInterval(() => {
    for(var i = 0; i<mobs.length; i++){
      //setTimeout(function(){ console.log("Hello"); }, 3000);
      if(mobs[i].xmove > mobs[i].x  && mobs[i].xmove> mobs[i].startpositionx ){
      mobs[i].x += 3;
      //console.log( mobs[i].x)
      }
      if( mobs[i].countforstop  == 0 && mobs[i].xmove <= mobs[i].x && mobs[i].xmove >mobs[i].startpositionx || mobs[i].xmove == mobs[i].startpositionx ){
      //setTimeout(function(){ console.log(i+"sd") }, 1000/25)
        mobs[i].xmove = getRndInteger(-100,100) + mobs[i].x;
        mobs[i].startpositionx = mobs[i].x;
        mobs[i].countforstop = 1;
      }
      if(mobs[i].xmove < mobs[i].x  && mobs[i].xmove< mobs[i].startpositionx ){
        mobs[i].x -= 3;
       // console.log( mobs[i].x + "overthere")
        }
        if( mobs[i].countforstop  == 0 && mobs[i].xmove >= mobs[i].x && mobs[i].xmove < mobs[i].startpositionx || mobs[i].xmove == mobs[i].startpositionx  ){
          mobs[i].xmove = getRndInteger(-100,100) + mobs[i].x;
          mobs[i].startpositionx = mobs[i].x;
          mobs[i].countforstop = 1;
        }
        
      if(mobs[i].countforstop  == 1){
        mobs[i].timeforidle +=15;
  //console.log( mobs[i].timeforidle)
      }
      if(mobs[i].timeforidle > 500){

mobs[i].countforstop  = 0
mobs[i].timeforidle =0;
      }
    }
    
  }, 1000/15);
  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  var text = "console.log('Hello from eval!' );"
  eval("var x = function(word){console.log('Hello from eval!' + word);};");
  x("ndisaodnan");
eval(text)
  try{
  db.query('SELECT * FROM `lastpositon` WHERE  `user-id`="'+players.User_Id+'"',(err,result)=>{
  
    try{
    if(err)throw err;
    var op = JSON.stringify(result);
    console.log(result[0]["lastpositonX"])
    console.log(result[0]["lastpositonY"]);
    
  //  players.x = parseInt(result[0]["lastpositonX"])
   // players.y = parseInt(result[0]["lastpositonY"])
    //console.log( players.x )
   // console.log(players.y)
    
    }catch{}
      })
    } catch{

    }
 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 socket.on('AcceptQuest', function(data) {
   players.myquests.push({text :data.text});
   socket.emit('MyQuests',players.myquests)
   console.log(players.myquests[0])
 });


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Login
  socket.on('disconnect', function(){
   console.log(players.User_Id + "ID")
   
 //  +JSON.stringify(players) +
      db.query('UPDATE `ownstat` SET `player`='+"'"+JSON.stringify(players) +"'"+' WHERE `id` = 130',(err,result)=>{
        try{
        if(err)throw err;
        }catch{
          console.log("error")
        }
          })
    
  
    db.query('UPDATE `lastpositon` SET `lastpositonX`="'+ players.x +'",`lastpositonY`= "'+ players.y +'" WHERE `user-id`="'+players.User_Id+'"',(err,result)=>{
      try{
      if(err)throw err;
      }catch{}
        })
 
      //  console.log(socket.id)
       // console.log(SOCKET_LIST[id])
        console.log("delete")
        delete SOCKET_LIST[id];
        delete Player.List[id];
    
  });
  socket.emit("Players", players)
  var username;
  var password;
  socket.on('CreateAccount', function(data) {
    
      // console.log(data.players)
       // console.log(result[0]["Id"]+"id")
 // console.log(result[0]["Id"] + "ID")
        //players.User_Id = result[0]["Id"];
        username = data.username
        password = data.password
        db.query(' INSERT INTO `accounts`( `username`, `password`,`email`) VALUES ("'+data.username+'","'+data.password+'","'+data.email+'")',(err,res)=>{
         
        });
        db.query('SELECT `Id`, `username`, `password`, `email` FROM `accounts` WHERE `username` = "'+data.username+'"  AND  `password` = "'+data.password+'" ',(err,result)=>{
        //  console.log(result[0]["Id"] + "ID")
          //console.log(players)
          var PLAYERSTEXT =String( players)
          console.log( "'"+JSON.stringify(players) +"'")
          db.query(' INSERT INTO `ownstat`(`id`, `player`) VALUES ('+result[0]["Id"] +', '+"'"+JSON.stringify(players) +"'"+')',(err,res)=>{
           console.log(err)
          });
          db.query(' SELECT  `id`, `player` FROM `ownstat`  WHERE `id` = '+result[0]["Id"] +'',(err,res)=>{
            console.log(res)
          });
          db.query(' INSERT INTO `lastpositon`( `user-id`+`nickname`, `lastpositonX`, `lastpositonY`) VALUES ( "'+result[0]["Id"] +'","'+data.username+'","250","250")',(err,res)=>{});
          db.query(' INSERT INTO `bag`(`IDofUser`, `Item1`, `Item2`, `Item3`, `Item4`, `Item5`, `Item6`, `Item7`, `Item8`, `Item9`, `Item10`) VALUES ('+result[0]["Id"] +',"0FirstSniper","null","null","null","null","null","null","null","null","null")',(err,res)=>{
            //console.log("bag")
            players.Bag = [{Item:null} , {Item:null}, {Item:null} ,{Item:null} ,{Item:null},{Item:null},{Item:null},{Item:null},{Item: null},{Item: null}];
            players.pickitem.value = null;
          });

        });
  })

  socket.on('Login', function(data) {
    db.query('SELECT `Id`, `username`, `password`, `email` FROM `accounts` WHERE `username` = "'+data.username+'" AND `password` = "'+data.password+'"',(err,result)=>{
    
      var op = JSON.stringify(result);
      try{
         // if(err)throw err;
      console.log(  "there " +  result[0]["username"] + result[0]["Id"])
      players.User_Id = result[0]["Id"];
      db.query(' SELECT `id`, `player` FROM `ownstat` WHERE `id` = '+players.User_Id+'',(err,res)=>{
//console.log(res[0]["player"].p('"', '') )
console.log("upone")
//console.log(JSON.stringify(eval("(" + res[0]["player"]+ ")")) )
var str = 'The"quick"brown "fox jumps over the lazy dog.';

var copyofplayer = res[0]["player"].split('"');
console.log(copyofplayer[3]);
var endresult = ''
for(var i = 0; i < copyofplayer.length;i++ ){
  endresult += copyofplayer[i]
 // console.log(words[i])
}
//var players = Player(socket.id , socket)
//console.log(JSON.parse(res[0]["player"]))
var playerscopy = JSON.parse(res[0]["player"])

playerscopy.updatePosition = function(){
  var myself = [];  
  var self = playerscopy
  myself = {x:self.x , y:self.y , maxspeed :self.maxspeed ,pickitem:{value :self.pickitem.value ,SpecialId:self.pickitem.SpecialId}, bag :self.Bag , Bullets: self.Bullets,TankBullets:self.TankBullets,TanksPosition:self.TanksPosition,MyBuild:self.MyBuild,CannonBullets:self.CannonBullets,Gold:self.Gold};
  
  socket.emit('myself',myself);
 //console.log(myself.x)
  //console.log(myself.TankBullets)

  if(self.pressRight){ 
     self.x += self.maxspeed;
    // console.log("x: " + arrey.x + " max: " +self.maxspeed+ " id:" + self.id)
  }
  if(self.pressLeft)
  self.x -= self.maxspeed;
  if(self.pressUp)
  self.y -= self.maxspeed;
  if(self.pressDown)
  self.y += self.maxspeed;
 
 }
 players= playerscopy
 players.User_Id = result[0]["Id"]
 players.id = socket.id
 Player.List[id] = players
 players.name = data.name
 socket.emit("name",data.username)
 console.log(players.id  + "        ID")
 MyBuild = players.MyBuild
 //console.log(playerscopy)
      });
      db.query(' SELECT `IDofUser`, `Item1`, `Item2`, `Item3`, `Item4`, `Item5`, `Item6`, `Item7`, `Item8`, `Item9`, `Item10` FROM `bag` WHERE `IDofUser` = '+players.User_Id+'',(err,res)=>{
        for(var i = 0; i < 10; i++ ){
          if(res[0]["Item" +( i + 1)] == "null")
          players.Bag[i].Item = null
else
players.Bag[i].Item ={value: res[0]["Item" + (i + 1)]}

        // console.log("Item" + i + 1)
         //console.log("Item" + (i + 1))
      //  console.log(res[0]["Item" + (i + 1)] +"dad")
        // console.log(res[0]["Item" + i + 1])
        }
        players.pickitem.value = res[0]["Pickeditem"];
        players.pickitem.SpecialId = res[0]["Pickeditem"]
       // console.log(res[0]["Pickeditem"])
      });
      socket.emit('Login',"none")
    


      }
      catch{
 console.log("wrongpassword")
 socket.emit('GetAlert',{TypeofAlert:"" , Alertfor:"JustAlert" , itemid:"", Text:"wrongpassword"});
      }
        })


  })
  socket.on('Attack', function(data) {
    //console.log(mobs)
  /*
    db.query('SELECT * FROM `persons` WHERE 1',(err,result)=>{
      if(err)throw err;
      var op = JSON.stringify(result);
      
      //console.log(  "there " +  result[0]["FirstName"])
      
        })
        */
    //console.log(data.mouseposition)
   // console.log(data.Degree)
    var onebullet = {Degree: data.Degree, Aside: 0, Bside : 0 , Cside: 0 , firstleft : players.x,firsttop:players.y}
   
    players.Bullets.push(onebullet);
    console.log(players.Bullets.length)
   // console.log(players.Bullets[0])
  });
  setInterval(() => {
 //   console.log(players.Bullets[0])
    for(var i = 0 ; i < players.Bullets.length;i++){
     // console.log(players.Bullets[i])
if(players.Bullets[i] != undefined){
     if(players.Bullets[i].Cside  < 500){
     
   // var g = document.createElement('div');
     //   g.id = 'someId';
     //   g.position ="absolute";
      //  g.top=  Aside+ "px";
//console.log(g.top)
      //Degree._currentValue
      var firstleft = players.Bullets[i].firstleft;
     // var Bside = -(firstleft - this.state.left)
      var firsttop= players.Bullets[i].firsttop;
    //  var Aside = firsttop - this.state.top
     var Bangle = players.Bullets[i].Degree ;
      var Aangle =   90 - Bangle;
      
      var Asin = Math.sin( Aangle *Math.PI/180)
      
      var Bsin = Math.sin(Bangle*Math.PI/180);
      players.Bullets[i].Cside += 5;
      var Csin = Math.sin(90*Math.PI/180)
      //console.log( Csin);
     // console.log( Degree._currentValue)
      
      //b/0.5 = a/1; a = b/0.5*1
     // console.log(Aangle)
      //180 - 45
     //console.log(Math.tan((30 * (180 / Math.PI))))
     // a= b/0.5*1
     var  Aside =  -(( players.Bullets[i].Cside/ Csin )* Asin) + firsttop;
     var Bside = (( players.Bullets[i].Cside/ Csin )* Bsin)  + firstleft;
     //console.log(Aangle)
    //  console.log(Aside)
     // console.log(Bside)
       //this.setState({top:this.state.top - (1/2)*5  })
   
    players.Bullets[i].Aside =  Aside;
    players.Bullets[i].Bside =  Bside;
  //  console.log(players.Bullets[i] + "nonthere")
   }
   else{
   delete  players.Bullets[i] ;
 //  console.log(players.Bullets[i] + "there")
   }
  }
    }
  }, 1000/25);
  console.log('a user connected');
  socket.id   = Math.random();
//socket.on('word', (word) => {
  // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
  // we make use of the socket.emit method again with the argument given to use from the callback function above
  //console.log('Word Changed to: ', word);myself
  
 // io.sockets.emit('word', word);
//})

socket.on('Degree',function(data){
  players.degree = data; 
  //console.log(players.degree);
  
});
socket.on('Pickitem',function(data){
 var backinbagItem = { value:players.pickitem.value , id:players.pickitem.SpecialId};
 

  players.pickitem.value = players.Bag[data.id].Item.value; 

  players.pickitem.SpecialId = players.Bag[data.id].Item.SpecialId;
  if(backinbagItem.value != null){
  players.Bag[data.id].Item.value = backinbagItem.value;
  players.Bag[data.id].Item.SpecialId = backinbagItem.id;
  }
  else{
    players.Bag[data.id].Item = null
  }
  //console.log(players.degree);
  
});
socket.on('Swapitem',function(data){
  var thisItem = players.Bag[data.thisItem].Item;
  players.Bag[data.thisItem].Item = players.Bag[data.ItemforSwap].Item;
  players.Bag[data.ItemforSwap].Item = thisItem;
//console.log("get item: "+players.Bag[data.thisItem].Item);
//console.log("swap item: "+players.Bag[data.ItemforSwap].Item);
//socket.emit('Alert',data.thisItem);@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   
});
socket.on('Alert',function(data){
  var yesorno = "YesOrNo";
  if(data.Alertfor == "DropItem"){
   // console.log("yes")
    socket.emit('GetAlert',{TypeofAlert:yesorno , Alertfor:data.Alertfor , itemid:data.itemid, Text:"Are you sure you want to delete this item?" + " Item : " + players.Bag[data.itemid].Item.value.replace(/[0-9]/g, '') });
  }
  if(data.Alertfor == "JustAlert"){
    socket.emit('GetAlert',{TypeofAlert:"" , Alertfor:data.Alertfor , itemid:"", Text:data.Text});
   // socket.emit('Alert',{Alertfor:"DropItem", itemid: Item.id});
  }
  console.log(data.Alertfor);
  console.log(data.itemid);
  //socket.emit('GetAlert',data.thisItem);
});

socket.on('AnswerofAlert',function(data){
 // socket.emit('GetAlert',yesorno);
 console.log(data.Alertfor);
 console.log(data.idofItem)
 if(data.Alertfor == "DropItem"){
    if(data.Answer ==  true){
      players.Bag[data.idofItem].Item =null;
      console.log( players.Bag[data.idofItem].Item)
    }
    
 }
 
 
});
socket.on('Unpick',function(data){

 //console.log(players.Bag)
 var stoper = "start";
 if(data.value == players.pickitem.value && data.SpecialId == players.pickitem.SpecialId ){
  for(var i = 0; i <players.Bag.length; i++ ){
    if(players.Bag[i].Item != null){
         if( players.Bag[i].Item.value == data.value &&  players.Bag[i].Item.SpecialId == data.SpecialId){
         stoper = "stop";
         players.pickitem.value = null;
         players.pickitem.SpecialId = null;
         }
        }

  }
 }
 else{
  stoper = "stop";
 }
 if(stoper == "start" ){
  var count = 0;
  for(var i = 0; i <players.Bag.length; i++ ){
if(players.Bag[i].Item  == null && count == 0){
 // console.log(" value :" + players.Bag[i].Item + " position : " + i)
  players.Bag[i].Item =  {value : data.value, SpecialId : data.SpecialId};
  
  players.pickitem.value = null;
  players.pickitem.SpecialId = null;
  count = 1;
}
  }
}
  //console.log(players.degree);
 // console.log(players.Bag)
});

  socket.on('Keypress',function(data){

  if(data.inputID === "Down")
  players.pressDown =data.state;
  if(data.inputID === "Right")
  players.pressRight = data.state;

  if(data.inputID === "Up")
  players.pressUp = data.state;
  if(data.inputID === "Left")
  players.pressLeft = data.state;


  });
 
console.log("id = " + socket.id .toString());
// add others players
// FrindsPack@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FrindsPack@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FrindsPack@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
setInterval(function(){

 var pack = [];
 var packofBullets = [];
 var playerf
for (var i in Player.List) {
  if(i != id  ){
var player = Player.List[i];

if(SOCKET_LIST[NextArrey[next]] != undefined){
  playerf = Player.List[NextArrey[next]]
  SOCKET_LIST[NextArrey[next]].emit("Attackers",players )
  //console.log()
}


//console.log(players.id)
//delete Player.List[i];
pack.push({x:player.x,
  y:player.y, degree:player.degree, pickitem: player.pickitem.value,Bullets:player.Bullets,TankBullets:player.TankBullets,MyBuild:player.MyBuild, TanksPosition: player.TanksPosition,TankBullets:player.TankBullets,CannonBullets:player.CannonBullets});
  //console.log("Guess X: " + player.x + "Id :" + player.id )
  //console.log(Player.List[i].Bullets)
  packofBullets.push({Bullets:player.Bullets})
  }
}
for(var i in SOCKET_LIST){
  //delete SOCKET_LIST[i]
  if(i == id){
  var sockets =   SOCKET_LIST[i]
 // console.log(i)
  //socket.emit("FriendsBullet",packofBullets)
//socket.emit('FriendsPosition',pack);
//console.log(pack[0].x )

//sockets.emit("Attackers",playerf )
//console.log(playerf)
sockets.emit("FriendsBullet",packofBullets)
sockets.emit('FriendsPosition',pack);
//sockets.emit('mobs',mobs);
//console.log(mobs)
 }

}

},1000/15 );
// FrindsPack@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FrindsPack@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FrindsPack@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// add others players
setInterval(function(){
  
 


//delete Player.List[i];



players.updatePosition(socket);
//console.log(players.TankBullets)
    

 
},1000 /25);


 
});
