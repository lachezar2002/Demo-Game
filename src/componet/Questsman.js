import React, { useState , useEffect,memo ,createRef, useContext } from 'react';

export default class  Questsman extends React.Component {


  




   
    constructor(props) {
      super(props);
      this.state = {
        
        Quest:[],
       GetQuest:[{text:"kill 3 dragons", isitget:"NO"} ,{text:"find 3 dogs", isitget:"NO"}],
        TopofBag: 80, 
    LeftofBag:80,
    FirstTopofBag:0,
    FirstLeftofBag:0,
     displayonlyforAlert: "none",
     CountforMoveBag:false,
      };
      this.socket = props.socket;
      this.Hide = this.Hide.bind(this);
      this.Show = this.Show.bind(this);
      this.OnClick = this.OnClick.bind(this);
      this.onMouseMoveBag = this.onMouseMoveBag.bind(this);
    this.onMouseDownBag = this.onMouseDownBag.bind(this);
    this.onMouseUpBag = this.onMouseUpBag.bind(this);
   // this.onMouseDownAccept = this.onMouseDownAccept.bind(this);
    }
    OnClick () {

    }
   
    Hide(){
   
    this.setState({displayonlyforAlert: "none"})
 
     }
     Show(){
 
    this.setState({displayonlyforAlert: ""})
 
     }
     onMouseDownBag(event){
     
      if(this.state.CountforMoveBag == false){
         this.setState({CountforMoveBag:true});
  this.setState({FirstLeftofBag: ( event.clientX - document.getElementById("quest").offsetLeft) });
  this.setState({FirstTopofBag: ( event.clientY - document.getElementById("quest").offsetTop) })
      }
  //console.log(this.state.FirstLeftofBag);
    }
    onMouseMoveBag(event){
      
   // var FirstX = 80;
   // var FirstY = 80;
   
   var mouse =  ( event.clientX - document.getElementById("quest").offsetLeft);
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
      this.socket.on('MyQuests',(data) =>{
        this.setState({Quest : data})
      });

    }
  render() {
      // testing for socket connections
  //{this.createTable()}
  
      return (
        <div>
          <img onClick={this.Show} src={"questtask.png"} style={{position:"absolute"  ,top: 200, left:1300, weight:150, height:150}} ></img>
        <div id = "quest"   style = {{position:"absolute" ,top:this.state.TopofBag, left:this.state.LeftofBag, height:300,width:500 ,textAlign: "left" }}>
    
    <div  style = {{  background: "black ",
      width:"855px" , height:" 50px",
          position:"absolute ",
          top:80 ,
          left:940 ,
          zIndex:"2",
          display: this.state.displayonlyforAlert}} onMouseMove={this.onMouseMoveBag} onMouseDown={this.onMouseDownBag} onMouseUp={this.onMouseUpBag} onMouseOut={this.onMouseUpBag}>
            <img src={"X.png"} onMouseDown={this.Hide} style={{position:"absolute" , left:830}}></img>
          </div>
    <div id ="GetQuest" style={{ 
  background: "#808080",
  width: "550px",
  height: "500px",
  border: "5px solid		#000000",
  padding: "10px",
  margin:" 20px",
  overflow: "auto",position:"absolute",
  left:920   ,
  top:100 ,
  display: this.state.displayonlyforAlert,
  zIndex:"1"
}} > <font size="200">Get Quest</font>
{this.state.GetQuest.map((quest) => <GetQuest   text = {quest.text} socket={this.socket} ></GetQuest>)}
 </div>
           <div id="" style={{ 
  background: "#808080",
  width: "250px",
  height: "700px",
  border: "5px solid		#000000",
  padding: "10px",
  margin:" 20px",
  overflow: "auto",position:"absolute",
  left: 1490,
  top:80,
  display: this.state.displayonlyforAlert,
  zIndex:"1"
}} >

  <font size="200">my quests</font>
  <hr></hr>
  
 
 {this.state.Quest.map((quest) => <Quest   text = {quest.text}  ></Quest>)}
 
</div>

           {/*<Chat></Chat>Enemy value = "ARFA"></Enemy>
           {this.state.Bag.map((number) => <Item   item = {number.Item} socket ={this.socket} top= {number.top} left={number.left} Id = {number.id} rarity={number.rarity}></Item>)}*/}
        
        </div>
        </div>
    );
   
    }
    
    
  }
  const  Quest =   memo(({text }) => {
    return <div>
<p>{text}</p>
<hr></hr>
    </div>
  });
  const  GetQuest =   memo(({text , socket }) => {
    
    const [picofAccpt, setpicofAccpt] = useState(
      "Accept.png"
    );
    const AcceptDown = () => {
   
      setpicofAccpt("clickedAccept.png");
 
      
        };
        const AcceptUp= () => {
   
          setpicofAccpt("Accept.png");
          socket.emit('AcceptQuest',{text:"DropItem", text: text});
          console.log("Accept")
            };
    return <div>
<p>{text}</p>
<img src={picofAccpt} onMouseDown={AcceptDown} onMouseUp={AcceptUp}></img>
<div style={{width: "530px",
  height: "5px",
  background:"black"}}></div>
    </div>
  });