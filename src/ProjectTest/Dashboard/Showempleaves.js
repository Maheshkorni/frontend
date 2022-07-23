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
        if( sessionStorage.getItem("check")=="True")
        {
            let id=sessionStorage.getItem("id")
            axios.get("http://localhost:18647/api/Leave/Showleaves/"+id).then(
                response=>{this.setState({Leave:response.data})}
            ).catch(error=>{alert("error")})
    
        }
        else{ window.location="/"}
       
    }
    render()
    {
        const {Leave}=this.state
        return(
            <body className="bodystyle2">
            <div className="cardtable">
            <br></br>
            <h1 className="textstyle">My Leaves</h1><br></br>
            <table className="table">
            <thead className="theadstyle">
                <tr>
     	            <th>Employee Id</th>
     	            <th>Start Date</th>
     	            <th>End Date</th>
     	            <th>Applied Date</th>
     	            <th>Status</th>
		            <th>Leave Type</th>
     	            <th>Reason</th>
                    <th>Manager Comments</th>
     	        </tr>
            </thead>
            <tbody>
           
           
            {
                
                Leave.map((a) =>
                    
                    
               
                    <tr>
                   
                    <td >{a.employeeId}</td>
                    <td>{a.startDate}</td>
                    <td>{a.endDate}</td>
                    <td>{a.appliedDate}</td>
                    <td>{a.status}</td>
                    <td>{a.leaveType}</td>
                    <td>{a.reason}</td>
                   <td>{a.managerComments}</td>
                    </tr>
                    
                  
                   
                    )
                    
            }
            
            </tbody>
            
            </table>
            
            </div>
            </body>
        )
    }
}