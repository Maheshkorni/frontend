import React from "react";
import Welcome from "./Welcome";
import axios from 'axios'
import './Login.css'

export default class Login extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            employeeId:'',
            password:'',
           
        }
        this.Handler=this.Handler.bind(this)
        this.Login=this.Login.bind(this)
        
    }
    Handler(object)
    {
        this.setState(object)
    }
    Login(e)
    {
        e.preventDefault()

        axios.post("http://localhost:18647/api/Crud",{
            employeeId:this.state.employeeId,
            password:this.state.password
        }).then(result =>
            {
              console.log(result);
              alert(result );
              if(result.data=='1'){
                alert("Valid");

                window.location="/ApplyLeave";
              }
              else{
                alert("InValid");
              }
       
            }).catch(error=>{alert(error)})

    }

    render()
    {
        const {key}=this.state.employeeId
        return(<><div className="Welcome">

            <div className="mb-3">
                <label className="form-label">User Id</label>
                <input type="text" name="userId"  onChange={(e) => this.Handler({ employeeId: e.target.value })}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="Password" name="password"  onChange={(e) => this.Handler({ password: e.target.value })}></input>
            </div>
            <button className="button" type="submit" onClick={this.Login}>Login</button>

        </div></>

        )
    }
}