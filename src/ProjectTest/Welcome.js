import React  from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css'
import {BrowserRouter,Routes,Route,Link, useNavigate, useHref}  from 'react-router-dom';
import ApplyLeave from "./ApplyLeave";
import Login from "./Login";
import ReactDOM from 'react-dom';  

export default class Welcome extends React.Component{
    
    
    constructor(props)
    {
        super(props);
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
        
        
    }
    
   
    
    refreshList()
    {
        let url="http://localhost:18647/ShowAllEmployees"
        fetch(url).then(response=>response.json()).then(result=>{
            this.setState({Employees:result})
        })
        console.log(this.state.Employees)
    }
    componentDidMount()
{
    this.refreshList();
    
}


render()
    {
        const {Employees}=this.state
        
        return(<>
    
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
                        <td>{index+1}</td>
                        <td>{a.employeeId}</td>
                        <td>{a.fullName}</td>
                        <td>{a.department}</td>
                    
                        <td><Link to={"/Login"}><button className="btn btn-dark" >Login</button></Link></td>
                         
                        </tr>
                        )
                        
                }

            </tbody>
           
 
        </table>
        
        
        </div>
        

       
        </>)
    }
}
