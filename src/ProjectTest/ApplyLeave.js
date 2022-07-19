import React from "react"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ApplyLeave extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            leaves:[],
            startDate:'',
            endDate:'',
            noofdays:'',
            Leavetype:'',
            reason:''
        }
    }
    handleChange(e)
    {
        this.setState({"startDate":e.target.value})
        console.log(e.target.value)
        console.log(this.state.leaves)

        
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
                    <input className="form-control" name="startDate" type="Date" onChange={(Event)=>this.handleChange(Event)} ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">EndDate</label>
                    <input className="form-control" name="enddate" onChange={(e)=>this.handleChange({endDate:e.target.value})} type="Date" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">No. of Days</label>
                    <input className="form-control" name="Days" onChange={(e)=>this.handleChange({Days:e.target.value})} type="text" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Leave Type</label>
                    <input className="form-control" name="Leavetype" onChange={(e)=>this.handleChange({Leavetype:e.target.value})} type="Text" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Reason</label>
                    <input className="form-control" name="reason" value={this.props.key} onChange={(e)=>this.handleChange({reason:e.target.value})} type="Text" ></input>
                    
                </div>
            </form>
            <button className="btn btn-dark">Submit</button><br></br>
            <button className="btn btn-dark">Cancel</button>
            <h1>{this.props.key}</h1>
            
            </>
        )
    }


}