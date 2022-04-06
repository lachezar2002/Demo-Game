import React, { Suspense, laz , useState , useEffect,memo ,createRefy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link , Redirect } from 'react-router-dom';
export default  class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        dispaly:"",
        redirect: false,
        Players:[]
       };
     this.socket = this.props.socket
     this.login = this.login.bind(this);
     this.createAcc = this.createAcc.bind(this)
     
    }
    
    
    login(){
     
        console.log( document.getElementById("username").value);
        console.log("sad");
        console.log(document.getElementById("password").value)
        this.socket.emit('Login',{username:document.getElementById("username").value, password: document.getElementById("password").value});
    }
    createAcc(){
      if( document.getElementById("createpassword").value == document.getElementById("createreapeatpassword").value){

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("createemail").value)){
          console.log("it is email");
          console.log(document.getElementById("createusername").value.length)
         
          if(document.getElementById("createusername").value.length > 8 && document.getElementById("createpassword").value.length >8){
          this.socket.emit('CreateAccount',{username:document.getElementById("createusername").value, password: document.getElementById("createpassword").value,email:document.getElementById("createemail").value,players:JSON.stringify(this.state.Players)});
      this.socket.emit('Alert',{TypeofAlert:"" , Alertfor:"JustAlert" , itemid:"", Text:"You create your acc"});
      //this.setState({dispaly:"none"})
          }
          else{
            this.socket.emit('Alert',{TypeofAlert:"" , Alertfor:"JustAlert" , itemid:"", Text:"password or usarname are short"});
          }
    }
        else{
          console.log("it isn't email");
          this.socket.emit('Alert',{TypeofAlert:"" , Alertfor:"JustAlert" , itemid:"", Text:"it isn'email"});
        }
      

    }
      else{
      this.socket.emit('Alert',{TypeofAlert:"" , Alertfor:"JustAlert" , itemid:"", Text:"passwordagain must be like password"});
      }
    }
  
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/about' />
      }
    }
    componentDidMount() {
      this.socket.on('Players',(data) =>{
        console.log(data)
        this.setState({Players:data})
      })
      this.socket.on('Login',(data) =>{
        this.setState({dispaly:data})
        this.setState({
          redirect: true
        })
      });
   }
    render() {
      return (
        <div   style = {{position:"absolute" ,left:"40%" , top:"5%" ,width:450, height:800,  textAlign: "left" ,display:this.state.dispaly }}>
    {this.renderRedirect()}
        <img   src={"LOGIN.png"} style={{position:"absolute"  ,zIndex: -1, width : "100%" }} ></img>
        <input type="text"  id="username" name="lname" style={{zIndex: 1,  width:100,height:10,padding:" 9px 8px",margin: "8px 0",display: "inline-block",border: "none", top :"157px", left:"9px", position:"absolute",}} />
 
        <input type="text"  id="password"  style={{zIndex: 1,  width:100,height:10,padding:" 9px 8px",margin: "8px 0",display: "inline-block",border: "none", top :"240px", left:"9px", position:"absolute",}} />
        <input type="text"  id="createusername"  style={{zIndex: 1,  width:100,height:10,padding:" 9px 8px",margin: "8px 0",display: "inline-block",border: "none", top :"157px", left:"240px", position:"absolute",}} />
        <input type="text"  id="createpassword" name="lname" style={{zIndex: 1,  width:100,height:10,padding:" 9px 8px",margin: "8px 0",display: "inline-block",border: "none", top :"230px", left:"240px", position:"absolute",}} />
        <input type="text"  id="createreapeatpassword" name="lname" style={{zIndex: 1,  width:100,height:10,padding:" 9px 8px",margin: "8px 0",display: "inline-block",border: "none", top :"300px", left:"240px", position:"absolute",}} />
        <input type="text"  id="createemail" name="lname" style={{zIndex: 1,  width:100,height:10,padding:" 9px 8px",margin: "8px 0",display: "inline-block",border: "none", top :"365px", left:"240px", position:"absolute",}} />
        
        <img onClick={this.createAcc}  src={"CreateAccount.png"} style={{position:"absolute"  ,zIndex: 1 , width : 80 , top :"500px", left:"240px"}} ></img>
        
        
        
        
        <img onClick={this.login}  src={"loginbutton.png"} style={{position:"absolute"  ,zIndex: 1 , width : 80 , top :"500px", left:"50px"}} ></img>
 
        
        </div>
      );
    }
  }
  