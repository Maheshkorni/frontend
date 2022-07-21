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
            errors: {
                password: '',
              }
           
        }
        this.Handler=this.Handler.bind(this)
        this.Login=this.Login.bind(this)
        
    }
    
    Handler(object,event)
    {
        this.setState(object)
        let errors = this.state.errors;
        const { name, value } = event.target;
        switch (name) {
      
            case 'password': 
              errors.password = 
                value.length < 7
                  ? 'Password must be at least 8 characters long!'
                  : '';
              break;
            default:
              break;
          }
    }
    Login(e)
    {
        e.preventDefault()
        let id =sessionStorage.getItem("id")

        axios.post("http://localhost:18647/api/Crud",{
            employeeId:id,
            password:this.state.password
        }).then(result =>
            {
              console.log(result);
              if(result.data=='1'){
                alert("Login Successful");
                

                window.location="/Dashboard/"+id;
              }
              else{
                alert("InValid");
              }
       
            }).catch(error=>{alert(error)})

    }
    

    render()
    {
        const {errors} = this.state;
       
       
        return(<>
           
           

            <div className="Welcome1">

        <div className="form-container log-in-container">
        <form action="#" className="form">
            <h1>Login</h1>
            <br></br>
            <div className="social-container">
                <img src="https://cdn.onlinewebfonts.com/svg/img_304830.png" width="100" height="90"></img>
            </div>
            <br></br>
            
            <input type="text"  placeholder="Employee Id" name="userId" value={sessionStorage.getItem("id")}  onChange={(e) => this.Handler({ employeeId: e.target.value })} required/>
            <input type="password" placeholder="Password" name="password"  onChange={(e) => this.Handler({ password: e.target.value },e)} noValidate/>
            {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            <a href="#">Forgot your password?</a>
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
            
        </div> </>

        )
    }
}
