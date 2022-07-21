import './Dashboard.css'
import React from "react";


import { Routes,Route, BrowserRouter,Link } from 'react-router-dom';

export default class Dashboard extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(<>
           <body className='bodyclass'>
            <div className='topnav'>
            <Link to="/EmployeeDetails">EmployeeDetails</Link>
            <Link to="/ShowMyempLeaves">ShowMyempLeaves</Link>
            <Link to="/showManagerDetails">showManagerDetails</Link>
            <Link to="/Showempleaves">Showempleaves</Link>
            <Link to="/ApplyLeave">ApplyLeave</Link>
            <button className='Logout' onClick={()=>{sessionStorage.clear();window.location="/"}}>Logout</button>
            </div>
            <h1>Welcome back {sessionStorage.getItem("name")}</h1>
           
            </body>
           

            
           
        
        
        </>
        
        
        
        )
    }
}