import React from "react";
import axios from 'axios'
export default class ShowManagerDetails extends React.Component
{
    constructor()
    {
        super()
        this.state={
         
            "employeeId":"",
            "fullName":"",
            'email':"",
            'phoneNumber':"",
            
        }
    }
    componentDidMount()
    {
        let id=sessionStorage.getItem("id")
        axios.get("http://localhost:18647/ManagerDetails/"+id).then(
            response=>{this.setState({
                "employeeId":response.data.employeeId,
                "fullName":response.data.fullName,
                'email':response.data.email,
                'phoneNumber':response.data.phoneNumber
               

                                })}).catch(error=>{alert("error")})
            


    }
    render()
    {
       
        return(
            <div>
            <h1>ManagerDetails Page </h1>
            <div className="Welcome">
            <div className="overlay-panel">
           
            <input value={this.state.fullName} disabled></input>
            <input value={this.state.employeeId} disabled></input>
            <input value={this.state.email} disabled></input>
            <input value={this.state.phoneNumber} disabled></input>
           
            </div>
            
            </div>
            </div>)
    }
}