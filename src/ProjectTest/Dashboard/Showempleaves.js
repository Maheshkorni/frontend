import React from "react";
import axios from 'axios'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Showempleaves extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Leave:[],
            leaveId:"",
            employeeId:"",
            startDate:"",
            endDate:"",
            appliedDate:"",
            status:"",
            reason:"",
            leaveType:""         
        }
    }
    componentDidMount()
    {
        let id=sessionStorage.getItem("id")
        axios.get("http://localhost:18647/api/Leave/Showleaves/"+id).then(
            response=>{this.setState({Leave:response.data})}
        ).catch(error=>{alert("error")})

    }
    render()
    {
        const {Leave}=this.state
        return(
            <div>
            <h1>Showempleaves Page</h1>
            <table className="table table-hover">
            <thead>
            <tr>
            <td>Employee Id</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Applied Date</td>
            <td>Status</td>
            <td>Leave Type</td>
            <td>Reason</td>
            </tr>
            </thead>
            <tbody>
           
            {
                
                Leave.map((a) =>
                    <tr>
                    <td>{a.employeeId}</td>
                    <td>{a.startDate}</td>
                    <td>{a.endDate}</td>
                    <td>{a.appliedDate}</td>
                    <td>{a.status}</td>
                    <td>{a.leaveType}</td>
                    <td>{a.reason}</td>
                    </tr>
                    
                    )
                    
            }
            
            </tbody>
            
            </table>
            </div>
           
        )
    }
}