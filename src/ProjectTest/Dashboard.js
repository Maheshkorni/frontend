import './Dashboard.css'
import React from "react";
import axios from 'axios'

import { Routes,Route, BrowserRouter,Link } from 'react-router-dom';

export default class Dashboard extends React.Component
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
            'leaveBalance':"",
            'CasualLeaves' :"",
            'EarnedLeaves' :"",
            'MaternityLeaves' :""
        }
    }
    
    componentDidMount()
        {
          
           
            if(window.location.href.split("/")[4]==sessionStorage.getItem("id"))
            {
            sessionStorage.setItem("check","True")
            let id=sessionStorage.getItem("id")
            axios.get("http://localhost:18647/EmployeeDetails/"+id).then(
                response=>{this.setState({
                    "employeeId":response.data.employeeId,
                    "fullName":response.data.fullName,
                    'email':response.data.email,
                    'phoneNumber':response.data.phoneNumber,
                    'dateJoined':response.data.dateJoined,
                    'department':response.data.department,
                    'leaveBalance':response.data.leaveBalance,
                    'CasualLeaves' :response.data.casualLeaves,
                    'EarnedLeaves' :response.data.earnedLeaves,
                    'MaternityLeaves' :response.data.maternityLeaves
                    
    
                                    })}).catch(error=>{alert("error")})
                                 
                                }
                                else{ window.location="/"}
    
    }

   
    render()
    {
        return(<>
           <body className='bodystyle2'>
            <div className='topnav'>
            <Link to="/AllEmployees">All Employees</Link>
            <Link to="/ShowMyempLeaves">Leave Requests</Link>
            <Link to="/showManagerDetails">Manager Details</Link>
            <Link to="/Showempleaves">My Leaves</Link>
            <Link to="/ApplyLeave">Apply Leave</Link>
            <button className='Logout' onClick={()=>{sessionStorage.clear();window.location="/"}}>Logout</button>
            </div><br></br>
            <h1 className='textstyle'>Welcome back {this.state.fullName}</h1>
            
            <br></br>
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
                    <div className="input-box">
                    <span className="details">Casual Leaves</span>
                    <input value={this.state.CasualLeaves} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Earned Leaves</span>
                    <input value={this.state.EarnedLeaves} disabled></input>
                    </div>
                    <div className="input-box">
                    <span className="details">Maternity Leaves</span>
                    <input value={this.state.MaternityLeaves} disabled></input>
                    </div>
                    </div>
                </form>
            </div>
            </div>
           
            </body>
           

            
           
        
        
        </>
        
        
        
        )
    }
}