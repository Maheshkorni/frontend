import React, { Component } from 'react'
import {BrowserRouter,Routes,Route,Link}  from 'react-router-dom';
import ApplyLeave from './ApplyLeave';
import Welcome from './Welcome';

export default class App2 extends Component{
    render(){
        return(
            <><h1>This is main Page</h1><BrowserRouter>
            <ul>
                <li>
                    <Link to ="/welcome">Welcome</Link></li>
                    <li><Link to="/ApplyLeave">ApplyLeave</Link></li>
            </ul>
            
            <Routes>
            <Route path='/welcome' element={<Welcome />}></Route>
            <Route path='/ApplyLeave' element={<ApplyLeave />}></Route>
            </Routes>
            
            </BrowserRouter></>
        )
    }
}
 