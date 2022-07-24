import React, { Component } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
export default class ForgotPassword extends Component {
    constructor()
    {
        super()
        this.state={
            empid:"",
            password:"",
            passworderror:"",
            cpassworderror:"",
            email:sessionStorage.getItem("email1"),
            name:sessionStorage.getItem("name1"),
            otp1:"",
            "otp":Math.floor(100000+Math.random()*900000),
        }
        this.Details=this.Details.bind(this)
        this.handle=this.handle.bind(this)
        this.Sendmail=this.Sendmail.bind(this)
        this.generator=this.generator.bind(this)
        
        
    }
    generator()
    {
      var templateParams = {
        user_email:sessionStorage.getItem("email1"),
        to_name:sessionStorage.getItem("name1"),
        message:this.state.otp
      };
        
          emailjs.send('service_12kvvgf', 'template_ne6g25e', templateParams,'QlLCh_JKTqs9VbZbJ')
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
              console.log('FAILED...', error);
            });
    }
    
    Sendmail()
    {
      console.log("hi")
      if(this.state.otp.toString()===this.state.otp1)
      {
        console.log("working")
        axios.post("http://localhost:18647/resetpassword",{
          employeeId:this.state.empid,
          password:this.state.password
        }).then(response=>{alert(response.data)}).catch(error=>{alert("error")})
        sessionStorage.clear()
        window.location="/"
      }
      sessionStorage.clear()
    }
    handle(object)
    {
        this.setState(object)
        if(object.password.length<7)
        {
          this.setState({passworderror:"Must be 7 characters long"})
        }
        else if (object.cpassword!=this.state.password){
          this.setState({cpassworderror:"Password and Confirm Password are not same"})
        }
        else{
          this.setState({passworderror:""})
          this.setState({cpassworderror:""})
         }
    }
    Details(e)
    {
       
        
        axios.get("http://localhost:18647/EmployeeDetails/"+this.state.empid).then(response=>{
            sessionStorage.setItem("name1",response.data.fullName);
            sessionStorage.setItem("email1",response.data.email)
          }
          ).catch(error=>{console.log("error")}).then(this.generator())
          
         
          
          
          
    }
  render() {
    return (
      <div className='backgrnd'>
      <div className='forgotpassword'>
      <div className="form-container log-in-container">
      <h1 className='textstyle'>Forgot Password</h1>
      <div className='form'>
      <input type="text" name='empid' placeholder='Enter Employee Id' onChange={(e)=>this.handle({empid:e.target.value})} ></input>
      <br></br>
      <button className='button1' onClick={this.Details}>Get Details</button>
      <br></br>
      
      <input type="password" placeholder="Enter new Password" name='password' onChange={(e)=>this.handle({password:e.target.value})}></input>
      <p style={{color:"red"}}>{this.state.passworderror}</p>
      <input type="password" name='cpassword' placeholder="Confirm new Password" ></input>
      <p style={{color:"red"}}>{this.state.cpassworderror}</p>
      <input type="number" placeholder='enter otp ' onChange={(e)=>this.handle({otp1:e.target.value})} ></input>
     
      <button className='button1' onClick={this.Sendmail}>Confirm</button>
      </div>
      
      </div>
      </div>
      </div>
    )
  }
}
