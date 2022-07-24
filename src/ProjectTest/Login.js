import React,{Component} from "react";
import Welcome from "./Welcome";
import axios from 'axios'
import './Login.css'
import { useLocation,withRouter } from 'react-router-dom';
import Dashboard from "./Dashboard";




export default class Login extends Component{
    constructor()
    {
        super()
        this.state={
            employeeId:'',
            password:'',
            passworderror:"",
            employeeIderror:""
           
        }
        this.Handler=this.Handler.bind(this)
        this.Login=this.Login.bind(this)
        
    }
    validate()
    {
        if(this.state.employeeId==="" || this.state.employeeId.length<4)
        {
            this.setState({employeeIderror:"Please Enter Valid Employee Id"});
        }
        else if (this.state.password==="" || this.state.password.length<7)
        {
            this.setState({passworderror:"Please Enter Valid Password"});
        }
        else{ return true}
    }
    
    Handler(object,event)
    {
        this.setState(object)
        
    }
    Login(e)
    {
        e.preventDefault()
       
       this.setState({passworderror:""});
       this.setState({userIderror:""});
       if(this.validate())
       {
        this.setState({employeeIderror:""});
        axios.post("http://localhost:18647/api/Crud",{
            employeeId:this.state.employeeId,
            password:this.state.password
        }).then(result =>
            {
              console.log(result);
              if(result.data=='1'){
                alert("Login Successful");
                sessionStorage.setItem("id",this.state.employeeId)

                window.location="/Dashboard/"+this.state.employeeId;
              }
              else{
                alert("InValid");
              }
       
            }).catch(error=>{alert(error)})

       }

       

    }
    

    render()
    {
        const {errors} = this.state;
       
       
        return(<>
           <body className="backgrnd"  >

           <div  style={{}}>

            <div className="Welcome1">

        <div className="form-container log-in-container">
        <form action="#" className="form">
            <h1>Login</h1>
            <br></br>
            <div className="social-container">
                <img src="https://cdn.onlinewebfonts.com/svg/img_304830.png" width="100" height="90"></img>
            </div>
            <br></br>
            
            <input type="text"  placeholder="Employee Id" name="userId"   onChange={(e) => this.Handler({ employeeId: e.target.value })} required/>
            <p style={{color:"red"}}>{this.state.employeeIderror}</p>
            <input type="password" placeholder="Password" name="password"  onChange={(e) => this.Handler({ password: e.target.value },e)} noValidate/>
            <p style={{color:"red"}}>{this.state.passworderror}</p>
            <a href="/ForgotPassword">Forgot your password?</a>
            <br></br>
            <button className="button1" type="submit" onClick={this.Login}>Log In</button>
        </form>
    </div>
    <div className="overlay-container">
        <div claclassNamess="overlay">
            <div className="overlay-panel overlay-right">
               <img src="https://download.logo.wine/logo/Hexaware_Technologies/Hexaware_Technologies-Logo.wine.png" height="300" width="300"></img>
            </div>
        </div>
    </div>
            
        </div>
        </div>
        </body>
         </>

        )
    }
}
