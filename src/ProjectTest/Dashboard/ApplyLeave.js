import React from "react"
import './ApplyLeave.css'
import axios from 'axios'
import { format, parseISO } from 'date-fns';
import emailjs from 'emailjs-com'


import { getCurrentDate } from "./DatePicker";

export default class ApplyLeave extends React.Component{
    constructor()
    {
        super();
        this.state={
            employeeId:sessionStorage.getItem("id"),
            startDate:'',
            endDate:'',
            appliedDate:getCurrentDate("-"),
            noofdays:'',
            leavetype:'',
            reason:'',
            status:'PENDING',
            startDateerror:"",
            endDateerror:"",
            Leavetypeerror:'',
            reasonerror:'',
            email:sessionStorage.getItem("email"),
            name:sessionStorage.getItem("name")
            
        }
        this.Apply=this.Apply.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.calci=this.calci.bind(this)
        this.Validate=this.Validate.bind(this)
       
    }
    
    calci()
    {
       
       
           
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var diffDays = Math.abs((new Date(this.state.endDate).getTime() - new Date(this.state.startDate).getTime()) );
            var ans=Math.ceil(diffDays/(oneDay))
           this.setState({noofdays:ans+1})
            console.log(ans)

        
        
    }
    Validate()
    {
       // console.log("Validate")
      if(this.state.startDate==="")
      {
        this.setState({startDateerror:"Required"})
        return false
      }
      else if(this.state.endDate==="")
      {
        this.setState({endDateerror:"Required"})
        return false
      }
      else if(this.state.leavetype==="")
      {
        this.setState({Leavetypeerror:"Required"})
        return false
      }
      else if(this.state.reason==="")
      {
        this.setState({reasonerror:"Required"})
        return false
      }
      else{ 
        this.setState({startDateerror:""})
        this.setState({endDateerror:""})
        this.setState({Leavetypeerror:""})
        this.setState({Leavetypeerror:""})
        this.setState({reasonerror:""})
        return true
    
    }
    }
    handleChange(e)
    {
       
        this.setState(e)
        this.calci()
       
       
        if(new Date(e.startDate).getDay()== 6 || new Date(e.startDate).getDay() == 0)
        {
            this.setState({startDateerror:"start date must not be a weekend"})
        }
        else if(new Date(e.startDate)<new Date(getCurrentDate("-"))){this.setState({startDateerror:"start Date must not be in past"})}
       
        else if(new Date(e.endDate)<new Date(this.state.startDate)){this.setState({endDateerror:"end date cannot be less than start date"})}
        else if(new Date(e.endDate).getDay()== 6 || new Date(e.endDate).getDay() == 0)
        {
            this.setState({endDateerror:"end date must not be a weekend"})
        }
        else if (e.reason.length<4){this.setState({reasonerror:"Reason must be greater than 4 characters"})}
        else{ 
            
            this.setState({startDateerror:""})
            this.setState({endDateerror:""})
            //this.calci()
    }
    }
    
    Apply(e)
    {
        if(!this.Validate())
        {
            alert("Invalid Data")
        }
        else{
            e.preventDefault()
        axios.post("http://localhost:18647/ApplyLeave",{
                count:this.state.noofdays,
                employeeId: this.state.employeeId,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                appliedDate: this.state.appliedDate,
                status: "PENDING",
                reason: this.state.reason,
                leaveType: this.state.leavetype,
                managerComments:""}
                ).then(reponse=>{alert("Leave Applied Successfully");window.location="/Dashboard/"+sessionStorage.getItem("id")}).catch(error=>{alert("Something Went Wrong")})
//'service_12kvvgf','template_ne6g25e',this.state,'QlLCh_JKTqs9VbZbJ'
var templateParams = {
    user_email:this.state.email,
    to_name:this.state.name,
    message:this.state.leavetype+" Applied successfully from "+this.state.startDate+" to "+this.state.endDate
  };

  
  emailjs.send('service_12kvvgf', 'template_ne6g25e', templateParams,'QlLCh_JKTqs9VbZbJ')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
              
                
        
            }

        
       
       
        
    }
    componentDidMount()
    {
        if( sessionStorage.getItem("check")=="True")
        {
        console.log("Verified")
        console.log(sessionStorage.getItem("email"))
        }
        else{ window.location="/"}
    }

    render()
    {
       
        return(
            <>
            <body className="bodystyle2" >
            <div className="container">
            <div className="title">Apply Leave</div>
            <div className="content">
                <form >
                    <div className="user-details">
                    <div className="input-box">
                    <span className="details">Start Date</span>
                    <input onClick={this.Validate} name="startDate" type="Date" id="d1" onChange={(e) => this.handleChange({ startDate: e.target.value })} required></input>
                    <p style={{color:"red"}}>{this.state.startDateerror}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">End Date</span>
                        <input onClick={this.Validate} className="form-control" id="d2" name="enddate" onChange={(e)=>{this.handleChange({endDate:e.target.value})}} type="Date" ></input>
                    <p style={{color:"red"}}>{this.state.endDateerror}</p>
                    </div>
                    <div className="input-box">
                    <span className="details">Number of days</span>
                    <input  className="form-control" name="Days" value={this.state.noofdays} type="text" disabled></input>
                </div>
                <div className="input-box">
                    <span className="details">Leave Type</span>
                    <select onClick={this.Validate} className="form-control" type="text" name="leavetype" onChange={(e)=>this.handleChange(this.setState({leavetype:e.target.value}))}>
                    <option>None</option>
                    <option>Casual Leave</option>
                    <option>Earned Leave</option>
                    <option>Maternity Leave</option>
                    </select>
                     <p style={{color:"red"}}>{this.state.Leavetypeerror}</p>
                </div>
    
                <div className="input-box" >
                    <span className="details">Reason</span>
                    <input onClick={this.Validate} className="form-control" name="reason"  onChange={(e)=>this.handleChange({reason:e.target.value})} type="Text" ></input>
                    <p style={{color:"red"}}>{this.state.reasonerror}</p>
                </div>
         </div> 
        
        <button className="button45" onClick={this.Apply}  >Submit</button>
            <button className="button45" onClick={()=>{window.location="/Dashboard/"+sessionStorage.getItem("id")}}>Cancel</button>
           
</form>
</div>
</div>
</body>           
            
            </>
        )
    }


}