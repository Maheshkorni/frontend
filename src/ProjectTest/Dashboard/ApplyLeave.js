import React from "react"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import { getCurrentDate } from "./DatePicker";

export default class ApplyLeave extends React.Component{
    constructor()
    {
        super();
        this.state={
            employeeId:'',
            startDate:'',
            endDate:'',
            appliedDate:getCurrentDate("-"),
            noofdays:'',
            Leavetype:'',
            reason:'',
            status:'PENDING'
        }
        this.Apply=this.Apply.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e)
    {
        this.setState(e)
     
    }
    Apply()
    {
        let id=sessionStorage.getItem("id")
        axios.post("http://localhost:18647/ApplyLeave",{
            employeeId: id,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            appliedDate: getCurrentDate("-"),
            status: "PENDING",
            reason: this.state.reason,
            leaveType: this.state.Leavetype
        }).then(reponse=>{alert("Leave Applied Successfully");window.location="/Dashboard/"+id}).catch(error=>{alert("Something Went Wrong")})
       //
        
        
    }

    render()
    {
        const {leaves}=this.state
        return(
            <>
            <form>
                <h1>Apply Leave</h1>

                <div className="mb-3">
                    <label className="form-label">StartDate</label>
                    <input className="form-control" name="startDate" type="Date" onChange={(e) => this.handleChange({ startDate: e.target.value })} ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">EndDate</label>
                    <input className="form-control" name="enddate" onChange={(e)=>this.handleChange({endDate:e.target.value})} type="Date" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">No. of Days</label>
                    <input className="form-control" name="Days"  type="text" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Leave Type</label>
                    <input className="form-control" name="Leavetype" onChange={(e)=>this.handleChange({Leavetype:e.target.value})} type="Text" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Reason</label>
                    <input className="form-control" name="reason"  onChange={(e)=>this.handleChange({reason:e.target.value})} type="Text" ></input>
                    
                </div>
            </form>
            <button className="btn btn-dark" onClick={this.Apply}>Submit</button><br></br>
            <button className="btn btn-dark" onClick={()=>{window.location="/Dashboard/"+this.Apply.id}}>Cancel</button>
            
            
            </>
        )
    }


}