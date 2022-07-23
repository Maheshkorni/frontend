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
        if( sessionStorage.getItem("check")=="True")
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
    else{ window.location="/"}
        
            


    }
    render()
    {
       
        return(
            <div>
             <div className="container">
            <div className="title">Employee Details</div>
            <div className="content">
                <form >
                    <div className="user-details">
                    <div className="input-box">
                    <span className="details">Full Name</span>
                    <input value={this.state.fullName} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Employee Id</span>
                    <input value={this.state.employeeId} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Email</span>
                    <input value={this.state.email} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input value={this.state.phoneNumber} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Joining Date</span>
                    <input value={this.state.dateJoined} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Department</span>
                    <input value={this.state.department} disabled></input>
                    </div>
                    </div>

                </form>
            </div>
            </div>
            </div>)
    }
}