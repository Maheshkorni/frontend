import React  from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css'
import {Link}  from 'react-router-dom';




export default class Welcome extends React.Component{
    
    
    constructor()
    {
        super();
        this.state={
            Employees:[],
            employeeId:"",
            fullName:"",
            email:"",
            phoneNumber:"",
            dateJoined:"",
            department:"",
            leaveBalance:""
        }
        
        this.setter=this.setter.bind(this)
    }
    
  
    
    refreshList()
    {
        let url="http://localhost:18647/ShowAllEmployees"
        fetch(url).then(response=>response.json()).then(result=>{
            this.setState({Employees:result})
        })
        
    }
    componentDidMount()
{
    this.refreshList();
    
}
setter(e)
{
    sessionStorage.setItem("id",this.state.Employees[e.target.id].employeeId)
    sessionStorage.setItem("name",this.state.Employees[e.target.id].fullName)
    console.log(sessionStorage.getItem("id"))

}


render()
    {
        const {Employees}=this.state
        
        return(<div>
            
    
                <div className="Welcome">
            <h2>Employee LIst</h2>
        <table className="table table-hover" >
            <thead>
            <tr>
                <td>#</td>
                <td>EmployeeId</td>
                <td>Employee Name</td>
                <td>Department</td>
                <td>Action</td>
            </tr>

            </thead>
            
            <tbody>
            {

                    Employees.map((a,index) =>
                        <tr>
                        <td >{index+1}</td>
                        <td >{a.employeeId}</td>
                        <td >{a.fullName}</td>
                        <td >{a.department}</td>
                        <td><Link to={{pathname:"/Login/"+a.employeeId }} ><button id={index} className="button1" onClick={e=>this.setter(e)}  >Login</button></Link></td>
                         
                        </tr>
                        )
                        
                }

            </tbody>
           
 
        </table>
        
        
        </div>
        

       
        </div>)
    }
}
