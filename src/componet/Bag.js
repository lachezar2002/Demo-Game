import React, {   memo ,useContext ,useCallback, useMemo} from 'react';
import {Hero} from 'D:/Game/React/game/src/componet/Myself.js';
 import  { useState, useEffect  } from 'react';
import { Degree   }from 'D:/Game/React/game/src/componet/OwnWeapon.js';

export default  class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Bag: [{Item:null},{Item:null},{Item:null},{Item:null},{Item:null},{Item:null},{Item:null},{Item:null},{Item:null},{Item:null}] ,Weapon: {value :"0FirstPistol"},

    Degree:20,
    Bagdisplay:"none",
    TopofBag: 80, 
    LeftofBag:80,
    FirstTopofBag:0,
    FirstLeftofBag:0,
    CountforMoveBag:false,
    SortByRarity:"All",
    // this aslo for test@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    DataWithItem:[{name: "0FirstSniper" , rarity :"Epic"} , {name: "50Firstsword" , rarity :"Common"} , {name: "0FirstPistol" , rarity :"Rare"} ]

  };
    this.socket = props.socket;
    this.ShoworHideBag = this.ShoworHideBag.bind(this);
    this.onMouseMoveBag = this.onMouseMoveBag.bind(this);
    this.onMouseDownBag = this.onMouseDownBag.bind(this);
    this.onMouseUpBag = this.onMouseUpBag.bind(this);
    this.HideBagX = this.HideBagX.bind(this);   
    this.ChangeRarityofSort = this.ChangeRarityofSort.bind(this);
  // this.arfa = useContext(Degree);
    // This binding is necessary to make `this` work in the callback
    
  }
  ShoworHideBag(event){
    var count =0;
    if(event.keyCode == 66){
      if(this.state.Bagdisplay == "" && count ==0){
      this.setState({Bagdisplay:"none"})
      count++;
      }
      if(this.state.Bagdisplay == "none" && count ==0){
        this.setState({Bagdisplay:""})
        count++;
        }
    }

    
  }
   ChangeRarityofSort(rarity){
     this.setState({SortByRarity:rarity.replace("SortBy","")}, ()=>{console.log(this.state.SortByRarity)});
    //console.log(rarity)
   // useMemo(() => this.setState({SortByRarity:rarity}));
    //console.log(rarity)
  //})

  }
  HideBagX(){
    this.setState({Bagdisplay:"none"}) 
  }
  onMouseDownBag(event){
   
    if(this.state.CountforMoveBag == false){
       this.setState({CountforMoveBag:true});
this.setState({FirstLeftofBag: ( event.clientX - document.getElementById("movebar").offsetLeft) });
this.setState({FirstTopofBag: ( event.clientY - document.getElementById("movebar").offsetTop) })
    }
//console.log(this.state.FirstLeftofBag);
  }
  onMouseMoveBag(event){
    
 // var FirstX = 80;
 // var FirstY = 80;
 
 var mouse =  ( event.clientX - document.getElementById("movebar").offsetLeft);
// console.log(this.state.LeftofBag);
if(this.state.CountforMoveBag == true ){
   this.setState({LeftofBag: event.clientX - this.state.FirstLeftofBag });
   this.setState({TopofBag:event.clientY - this.state.FirstTopofBag})
}
  }
  onMouseUpBag(){
this.setState({CountforMoveBag:false})
  }
  componentDidMount(){
// Should to get item s   names from data to check his sort @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




    document.addEventListener("keydown",this.ShoworHideBag);
    document.addEventListener("mouseup",this.onMouseUpBag);
   this.setState({Degree:Degree._currentValue});
   console.log(Degree._currentValue);
  // console.log( useContext(Degree));
  //var degree =Degree._currentValue;
  
  //console.log(this.state.SortByRarity);
  this.socket.on('myself',(data) =>{
   // console.log(this.state.SortByRarity);
    //  pickeditemS = data.pickeditem;
    this.setState({Weapon: data.pickitem})
   // DataWithItem.name
    //DataWithItem.rarity

    //var getRarity = this.state.SortByRarity.replace("SortBy","");
    //console.log(getRarity)
    //var str = "How are you doing today?";
    //var res = this.state.SortByRarity.split("SortBy");
    //var getRarity = res[1]
    //console.log(getRarity)
    
    var items = []
    var top = 215;
    var left = 25;   
    if(this.state.SortByRarity == "All"){
    for (var i = 0;i<data.bag.length;i++) {
     // console.log(this.state.Bag[i].Item)
      if(i == 5){
        left = 25;
        top += 45
      }
      // it is  default Sort-------------
      if(this.state.SortByRarity == "All"){
      if(data.bag[i].Item != null ){
      //@@@@@@@for(var j = 0; j < this.state. ){}
      //if(this.SortByRarity)
      for(var r =0; r < this.state.DataWithItem.length;r++ ){
        if(data.bag[i].Item.value == this.state.DataWithItem[r].name){
          var rarity = this.state.DataWithItem[r].rarity;
        }
            }
      items [i] = {Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i,rarity:rarity };
      left+=55;
      }
      else{
        items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
        left+=55;
      }
    }
  }
}
   // it is  default Sort---------------
    // it is  Common Sort---------------
    if(this.state.SortByRarity == "Common"){
    var count = 0;
    for (var i = 0;i<data.bag.length;i++) {
      
    
      for(var j = 0; j< this.state.DataWithItem.length;j++ ){
      if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity == this.state.SortByRarity ){
        if(count == 5 ){
          left = 25;
          top += 45
        }
        count++;
       //if(this.SortByRarity)
        items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i , rarity:this.state.SortByRarity});
        left+=55;
        }
       // else{
         // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
         // left+=55;
       // }
      }
     
}


// another item @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
for (var i = 0;i<data.bag.length;i++) {
  //console.log(items.length)
for(var j = 0; j< this.state.DataWithItem.length;j++ ){
  if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity != this.state.SortByRarity ){
    if(count == 5 ){
      left = 25;
      top += 45
    }
    count++;
    for(var r =0; r < this.state.DataWithItem.length;r++ ){
if(data.bag[i].Item.value == this.state.DataWithItem[r].name){
  var rarity = this.state.DataWithItem[r].rarity;
}
    }
    //if(this.SortByRarity)
    items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i ,rarity:rarity});
    left+=55;
    }
   // else{
     // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
     // left+=55;
   // }
  }
    }

// another item @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  }

  if(this.state.SortByRarity == "Rare"){
    var count = 0;
    for (var i = 0;i<data.bag.length;i++) {
      
    
      for(var j = 0; j< this.state.DataWithItem.length;j++ ){
      if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity == this.state.SortByRarity ){
        if(count == 5 ){
          left = 25;
          top += 45
        }
        count++;
        //if(this.SortByRarity)
        items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i,rarity:this.state.SortByRarity });
        left+=55;
        }
       // else{
         // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
         // left+=55;
       // }
      }
     
}
for (var i = 0;i<data.bag.length;i++) {
  //console.log(items.length)
for(var j = 0; j< this.state.DataWithItem.length;j++ ){
  if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity != this.state.SortByRarity ){
    if(count == 5 ){
      left = 25;
      top += 45
    }
    count++;
    for(var r =0; r < this.state.DataWithItem.length;r++ ){
      if(data.bag[i].Item.value == this.state.DataWithItem[r].name){
        var rarity = this.state.DataWithItem[r].rarity;
      }
    }
    //if(this.SortByRarity)
    items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i,rarity:rarity });
    left+=55;
    }
   // else{
     // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
     // left+=55;
   // }
  }
    }
 // it is  Common Sort---------------


  }




  if(this.state.SortByRarity == "Epic"){
    var count = 0;
    for (var i = 0;i<data.bag.length;i++) {
      
    
      for(var j = 0; j< this.state.DataWithItem.length;j++ ){
      if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity == this.state.SortByRarity ){
        if(count == 5 ){
          left = 25;
          top += 45
        }
        count++;
        //if(this.SortByRarity)
        items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i ,rarity:this.state.SortByRarity});
        left+=55;
        }
       // else{
         // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
         // left+=55;
       // }
      }
     
}
for (var i = 0;i<data.bag.length;i++) {
  //console.log(items.length)
for(var j = 0; j< this.state.DataWithItem.length;j++ ){
  if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity != this.state.SortByRarity ){
    if(count == 5 ){
      left = 25;
      top += 45
    }
    count++;
    //if(this.SortByRarity)
    for(var r =0; r < this.state.DataWithItem.length;r++ ){
      if(data.bag[i].Item.value == this.state.DataWithItem[r].name){
        var rarity = this.state.DataWithItem[r].rarity;
      }
    }
    items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i ,rarity:rarity});
    left+=55;
    }
   // else{
     // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
     // left+=55;
   // }
  }
    }
 // it is  Common Sort---------------


  }


//uncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMON

if(this.state.SortByRarity == "UnCommon"){
  var count = 0;
  for (var i = 0;i<data.bag.length;i++) {
    
  
    for(var j = 0; j< this.state.DataWithItem.length;j++ ){
    if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity == this.state.SortByRarity ){
      if(count == 5 ){
        left = 25;
        top += 45
      }
      count++;
      //if(this.SortByRarity)
      items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i ,rarity:this.state.SortByRarity});
      left+=55;
      }
     // else{
       // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
       // left+=55;
     // }
    }
   
}

for (var i = 0;i<data.bag.length;i++) {
//console.log(items.length)
for(var j = 0; j< this.state.DataWithItem.length;j++ ){
if(data.bag[i].Item != null &&  data.bag[i].Item.value == this.state.DataWithItem[j].name &&  this.state.DataWithItem[j].rarity != this.state.SortByRarity ){
  if(count == 5 ){
    left = 25;
    top += 45
  }
  count++;
  //if(this.SortByRarity)
  for(var r =0; r < this.state.DataWithItem.length;r++ ){
    if(data.bag[i].Item.value == this.state.DataWithItem[r].name){
      var rarity = this.state.DataWithItem[r].rarity;
    }
  }
  items.push({Item:{value: data.bag[i].Item.value , SpecialId:data.bag[i].Item.SpecialId } ,top :top , left: left , id: i ,rarity:rarity});
  left+=55;
  }
 // else{
   // items [i] = {Item: data.bag[i].Item ,top :top , left: left , id: i };
   // left+=55;
 // }
}
  }
// it is  Common Sort---------------


}

//uncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMONuncommomUNCOMMON







    
        this.setState({Bag : items});
        
        //console.log( " X :" + data.x + " Y :" + data.y + "maxspeed" + data.maxspeed)
      //  console.log(this.state.Bag);
    
          


    });
  }
  

  render() {
    return (
      <div>
     <div id = "movebar"   style = {{position:"absolute" ,top:this.state.TopofBag, left:this.state.LeftofBag, height:300,width:500 ,textAlign: "left" , display:this.state.Bagdisplay ,}}>
     {/*this.state.Bag.map((number) => number)*/}
     
     <Hero left = {125}  top = {50} addword = {'HERO'}></Hero>
     <div  style = {{  background: "black ",
      width:"300px" , height:" 30px",
          position:"absolute ",
          top:-20,
          left:0,}} onMouseMove={this.onMouseMoveBag} onMouseDown={this.onMouseDownBag}>
            <img src={"X.png"} onMouseDown={this.HideBagX} style={{position:"absolute" , left:270}}></img>
          </div>
    {this.state.Bag.map((number) => <Item   item = {number.Item} socket ={this.socket} top= {number.top} left={number.left} Id = {number.id} rarity={number.rarity}></Item>)}
         <img draggable="false" src={"Bag.png"}  width="300" height="300"   ></img>
         <PickedWeapon item ={this.state.Weapon} socket = {this.socket} rotate={Degree._currentValue} ></PickedWeapon>
         <WeapononHero item ={this.state.Weapon} rotate={Degree._currentValue} ></WeapononHero>
    {/*<p>{this.state.SortByRarity}</p>*/}
        <Sort ChangeRarityofSort ={this.ChangeRarityofSort}></Sort>
      
         </div>
        {/* <img src={"IconOfBag.png"} width = "100px"  height=" 100px" style = {{position:"absolute" ,top:"85%", left:"92%"}}></img>*/}
         </div>
    );
  }
}
const  Item =   memo(({item , socket , top , left , Id, rarity }) => {
  if(item != null){
 
    const [Top, setTop] = useState(
      top
    );
    const [Left, setLeft] = useState(
      left
    );
 const [zIndex , setzIndex] = useState(
   1
 )
    const [DisplaystatsofItem, setDisplaystatsofItem] = useState(
      'none'
    );
    const [topofstats, setTopofstats] = useState(
      0
    );
    //const [Swapitem, setSwapitem] = useState(
    //  false
   // );
   var  Swapitem = false;
    const [countformoveitem, setCountformoveitem] = useState(
      "Up"
    );
    const [leftofstats, setLeftofstats] = useState(
      0
    );
  var Item = {item : item.value , id: Id}
  console.log( item.value)
  
  const DownSendItem = (event) => {
   // setTop(500);
   setzIndex(2);
   setCountformoveitem("Down")
    // socket.emit('Pickitem',Item)
 
       
      };
      const UpSendItem = () => {
        //THIS IS FOR REMOVE ITEM
        if(Top < -40 || Top > 280 || Left < -20 || Left > 280){
          socket.emit('Alert',{Alertfor:"DropItem", itemid: Item.id});

        }
        // setTop(500);
        setzIndex(1);
     var PickedWeaponPosition = JSON.parse(localStorage.getItem("PickedWeaponPosition"));
        setCountformoveitem("Up")
       // console.log(PickedWeaponPosition.Top)
        if(Left > PickedWeaponPosition.Left  && Left < PickedWeaponPosition.MaxLeft &&  Top   >  PickedWeaponPosition.Top  && Top   <  PickedWeaponPosition.MaxTop  ){
       socket.emit('Pickitem',Item)
        }
        else{
          var firstleft = 23;
          var firstleftmax = 62;
          var spacebetweenItemsLEFT = 55;
          var spacebetweenItemsTOP = 0;
          var firsttop = 210;
          var firsttopmax = 245;
          var MultiplicationForPositionofItem = 0;

          for(var i = 0; i<10 ; i++){
         //s   console.log(i);
          //  console.log(firsttop + spacebetweenItemsTOP);
            //console.log( "left :" + (firstleft + (spacebetweenItems * i)));
            //console.log( "maxleft :" + (firstleftmax + (spacebetweenItems * i)));
            if(i == 5){
              spacebetweenItemsTOP = 45
              MultiplicationForPositionofItem= 0;
             }
            if((Left + 20) > firstleft + (spacebetweenItemsLEFT * MultiplicationForPositionofItem) && (Left + 20) < firstleftmax + (spacebetweenItemsLEFT * MultiplicationForPositionofItem) && (Top + 20) > firsttop + spacebetweenItemsTOP && (Top + 20) < firsttopmax + spacebetweenItemsTOP){
              console.log(i);
              socket.emit('Swapitem',{ thisItem:Item.id, ItemforSwap:i  })
              Swapitem = true;
             // setTop(top);
   //  setLeft(left);
              //Item
            }
            
         
           MultiplicationForPositionofItem++;
           
          }
          
        }
        if(Swapitem == true){
        
          setTimeout(function(){   setTop(top);
            setLeft(left) }, 1000/25);
        
          
        
      }
     
      if(Swapitem == false){
       setTop(top);
     setLeft(left);
      }
      else{
        Swapitem = false
      }

     
        
      
       
            
           };

      const mousemove = (event) => {
        // setTop(500);
        //event.clientX
     
       if(countformoveitem == "Down"){
         //console.log(Left)
         console.log(Top)
        setTop(  event.pageY  - document.getElementById("movebar").offsetTop - 20);
        setLeft(event.pageX  - document.getElementById("movebar").offsetLeft - 20);
       }
        setTopofstats(event.pageY  - document.getElementById("movebar").offsetTop )
        setLeftofstats(event.pageX  - document.getElementById("movebar").offsetLeft )
        setDisplaystatsofItem("")
         //console.log(topofstats);
     
            
           };
           const mouseout = (event) => {
            // setTop(500);
            //event.clientX
            setzIndex(1);
            setCountformoveitem("Up")
            setDisplaystatsofItem("none")
           if(Swapitem == false){
        setTop(top);
      setLeft(left);
           }else {Swapitem  = false}
                
               };
    //       StatsofItem
return <div>

<div   style = {{zIndex:3,position:"absolute",display: DisplaystatsofItem,top:topofstats - 45,left:leftofstats+ 25}} >
  <p style={{marginTop:20}} ><font size="1">name: {item.value}</font></p>
  <p style={{marginTop:-25}}><font size="1">rarity:{rarity}</font></p> 
  <p style={{marginTop:-25}} ><font size="1">dmg:add somethink</font></p>
  <p style={{marginTop:-25}}><font size="1">speed:add somethink</font></p>
  <p style={{marginTop:-25}}><font size="1">mats:add somethink</font></p>
  
  </div>
  <img src = "StatsofItem.png" width="100" height="70" style = {{ zIndex:2,position:"absolute",display: DisplaystatsofItem,top:topofstats - 20,left:leftofstats+ 25}}   ></img>
  
  

  <img alt="Item" draggable="false" src={item.value + ".png"} width="40" height="40"  onMouseOut={mouseout } onMouseMove={mousemove} onMouseDown = {DownSendItem} onMouseUp={UpSendItem}   style = {{position:"absolute" ,left:Left, top:Top , zIndex:zIndex}}></img>
</div>
  }
 })

 const  PickedWeapon =   memo(({item , socket}) => {
  
  const unpickWeapon = () => {
   
     socket.emit('Unpick',item)

     
       };
       localStorage.setItem("PickedWeaponPosition", JSON.stringify({Left: -10, MaxLeft: 50, Top:9,MaxTop:66 }))
       //console.log(JSON.parse(localStorage.getItem("PickedWeaponPosition")).Left)
if(item.value != null){
return <img draggable="false" alt = "PickedWeapon" src={item.value + ".png"} width="50" height="50"  onClick = {unpickWeapon}    style = {{position:"absolute" ,left:15  , top:40,transform: `rotate(${0}deg)`}}></img>
}
 })
 

 const  WeapononHero =   memo(({item , rotate}) => {
  var rotate = rotate;
  var pickeditem  = item.value;
  var degreeofthisItem = parseInt(pickeditem);
 
  
if(item.value != null){
return<img src={item.value + ".png"}      style = {{position:"absolute" ,left:125  , top:70,transform: `rotate(${rotate + degreeofthisItem}deg)`,zIndex:0}}></img>
}
 })

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.allsort = ["All","SortByCommon" ,"SortByUnCommon","SortByRare","SortByEpic"]
    this.Change = this.Change.bind(this);
  }
  
  Change(){

    if(this.state.count <this.allsort.length-1){
this.setState({count :this.state.count + 1},() =>{ 
  //console.log(this.state.count)

  this.props.ChangeRarityofSort(this.allsort[this.state.count])
})
    }
    else{
      this.setState({count :0},() =>{ 
        //console.log(this.state.count)
      
        this.props.ChangeRarityofSort(this.allsort[this.state.count])
      })
    }
//console.log(this.state.count);
  }
  //shouldComponentUpdate(nextProps, nextState){
    //console.log(this.state.count)
   // if (nextProps.order !== this.props.order) {
     // return true;
   // }
   //this.props.ChangeRarityofSort(this.state.count)
  //}
  
  componentDidUpdate(prevProps, prevState) {
   // useMemo(()=>{console.log(this.state.count)});
    //this.props.ChangeRarityofSort(this.state.count)
  // console.log(this.state.count)
  }
  render() {
    return (
      <div>

      <img onClick = {this.Change} src={this.allsort[this.state.count] + ".png"}   width="60" height="15"    style = {{position:"absolute" ,left:230 , top:180}}></img>
      </div>
    );
  }
}
