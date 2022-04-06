import React, {   memo ,useContext ,useCallback, useMemo,useState, useEffect} from 'react';
export default  class Alert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       displayforALL: "none",
       displayonlyforAlert: "",
       AnswerofAlert:{Answer: null, Alertfor:null,idofItem:null , Text:"JustAlert"},
       TextofAlert:"YOU JOINED"
      };
     this.socket = this.props.socket
      this.Hide = this.Hide.bind(this);
      this.Yes = this.Yes.bind(this);
      this.No = this.No.bind(this);
    }
    
    
    Hide(){
     // this.socket.emit('Alert',{Answer: null, Alertfor:"JustAlert",idofItem:null , Text:"JustAlert"});
    //  this.socket.emit('AnswerofAlert',"");
   this.setState({displayonlyforAlert: "none"})

    }
    Yes(){
      var AnswerofAlert = this.state.AnswerofAlert;
      AnswerofAlert.Answer = true;
      this.setState({AnswerofAlert: AnswerofAlert});
        
      console.log(this.state.AnswerofAlert)
      this.socket.emit('AnswerofAlert',this.state.AnswerofAlert);
      this.setState({displayonlyforAlert: "none"})
      this.setState({  displayforALL: "none"})
    }
    No(){
      var AnswerofAlert = this.state.AnswerofAlert;
      AnswerofAlert.Answer = false;
      this.setState({AnswerofAlert: AnswerofAlert});
        
      console.log(this.state.AnswerofAlert)
      this.socket.emit('AnswerofAlert',this.state.AnswerofAlert);
      this.setState({displayonlyforAlert: "none"})
      this.setState({  displayforALL: "none"})
    }
    componentDidMount() {
      this.socket.on('GetAlert',(data) =>{
        if(data.TypeofAlert == "YesOrNo"){

          this.setState({displayonlyforAlert: ""})
        this.setState({displayforALL:""});
        }
        var AnswerofAlert = this.state.AnswerofAlert;
        AnswerofAlert.Alertfor = data.Alertfor;
        AnswerofAlert.idofItem = data.itemid;
        this.setState({AnswerofAlert: AnswerofAlert});
        this.setState({TextofAlert:data.Text })
        //this.setState({[Alertfor]: data.Alertfor ,["Answer"]:null}); 
       // this.setState({AnswerofAlert:{Alertfor:data.Alertfor,Answer:null}})
    //  console.log("alert");
    this.setState({displayonlyforAlert: ""})
      });
   }
    render() {
      return (
        <div   style = {{position:"relative" ,left:"37%" , top:"50%" ,width:300, height:90, display:this.state.displayonlyforAlert , textAlign: "left" }}>
  <div  style = {{position:"absolute",fontSize:"10px", zIndex: 3, marginTop:20,color:"white"}}>{this.state.TextofAlert}</div>
        <img   src={"DarkAlert.png"} style={{position:"absolute"  ,zIndex: 2, width : "100%"}} ></img>
        <img onClick={this.Hide}  src={"X.png"} style={{position:"absolute"  ,zIndex: 2, left:270,}} ></img>
        <img onClick={this.Yes}   src={"Yes.png"} style={{position:"absolute",display:this.state.displayforALL  ,zIndex: 2, top :75, left:80,width:40, height:15}} ></img>
        <img onClick={this.No}  src={"No.png"} style={{position:"absolute" ,display:this.state.displayforALL ,zIndex: 2, left:170,top :75,width:40, height:15}} ></img>
      
        </div>
      );
    }
  }
  