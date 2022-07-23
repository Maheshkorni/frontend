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

            <body className="bodystyle2">
            <div>
            
            <div className="container">
            <div className="title">Manager Details</div>
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
                    </div>

                </form>
            </div>
            </div>
            
           
            </div>
            </body>
            )
    }
}