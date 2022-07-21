import React from "react";
import Dashboard from "../Dashboard";
import axios from 'axios'

export default class EmployeeDetails extends React.Component
{
    constructor()
    {
        super()
        this.state={
         
            "employeeId":"",
            "fullName":"",
            'email':"",
            'phoneNumber':"",
            'dateJoined':"",
            'department':"",
            'leaveBalance':""
        }
    }
    componentDidMount()
    {
        let id=sessionStorage.getItem("id")
        axios.get("http://localhost:18647/EmployeeDetails/"+id).then(
            response=>{this.setState({
                "employeeId":response.data.employeeId,
                "fullName":response.data.fullName,
                'email':response.data.email,
                'phoneNumber':response.data.phoneNumber,
                'dateJoined':response.data.dateJoined,
                'department':response.data.department,
                'leaveBalance':response.data.leaveBalance

                                })}).catch(error=>{alert("error")})
            


    }
    render()
    {
       
        return(
            <div>
            <h1>EmployeeDetails Page </h1>
            <div className="Welcome">
            <div className="overlay-panel">
           
            <input value={this.state.fullName} disabled></input>
            <input value={this.state.employeeId} disabled></input>
            <input value={this.state.email} disabled></input>
            <input value={this.state.phoneNumber} disabled></input>
            <input value={this.state.dateJoined} disabled></input>
            <input value={this.state.department} disabled></input>
            </div>
            
            </div>
            </div>)
    }
}