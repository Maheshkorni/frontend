import axios from "axios";
import React from "react";

export default class ShowMyempLeaves extends React.Component
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
        this.setter=this.setter.bind(this)
    }
    componentDidMount()
    {
        let id=sessionStorage.getItem("id")
        axios.get("http://localhost:18647/api/Manager/Showleaves/"+id).then(response=>
        {
            let id=sessionStorage.getItem("id")
            if(response.data=="Not a manager")
            {
                alert(response.data)
                window.location="/Dashboard/"+id
            }
            else if(response.data=="No Leaves Found")
            {
                alert(response.data)
                window.location="/Dashboard/"+id
            }
            else
            {
                {this.setState({Leave:response.data})}
        }
    }
        )
        
    }
    setter(a){
        console.log(this.state.Leave[a.target.id].leaveId)
        axios.post("http://localhost:18647/status",{
            leaveid:this.state.Leave[a.target.id].leaveId,
            employeeId:this.state.Leave[a.target.id].employeeId,
            managerComments:this.state.Leave[a.target.id].managerComments,
            status:"APPROVED"
        }).then(response=>{alert(response.data)}).catch(error=>{alert("error")})
        window.location.reload()

    }
    deny(a){
        console.log(this.state.Leave[a.target.id].leaveId)
        axios.post("http://localhost:18647/status",{
            leaveid:this.state.Leave[a.target.id].leaveId,
            employeeId:this.state.Leave[a.target.id].employeeId,
            managerComments:this.state.Leave[a.target.id].managerComments,
            status:"DENIED"
        }).then(response=>{alert(response.data)}).catch(error=>{alert("error")})
        window.location.reload()

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
            <td>Actions</td>
            </tr>
            </thead>
            <tbody>
           
            {
                
                Leave.map((a,index) =>
                    <tr>
                    <td>{a.employeeId}</td>
                    <td>{a.startDate}</td>
                    <td>{a.endDate}</td>
                    <td>{a.appliedDate}</td>
                    <td>{a.status}</td>
                    <td>{a.leaveType}</td>
                    <td>{a.reason}</td>
                    <td><button id={index} className="button1" onClick={e=>this.setter(e)}>Approve</button></td>
                    <td><button id={index} className="button1" onClick={e=>this.deny(e)}>Deny</button></td>
                    </tr>
                    
                    )
                    
            }
            
            </tbody>
            
            </table>
            </div>
           
        )
    }
}   
