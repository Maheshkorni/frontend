import logo from './logo.svg';
import './App.css';
import React from 'react'
import Message from "./Message";
import StateEx from './AfternoonPracc/StateEx';
import Hiding from './AfternoonPracc/Hide&show';
import Life from './AfternoonPracc/LifeCycle';
import Trial from "./AfternoonPracc/Trial"
import App2 from './ProjectTest/App2';
import Welcome from './ProjectTest/Welcome';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './ProjectTest/Login';
import ApplyLeave from './ProjectTest/Dashboard/ApplyLeave';
import Dashboard from './ProjectTest/Dashboard';
import EmployeeDetails from './ProjectTest/Dashboard/EmployeeDetails'
import Showempleaves from './ProjectTest/Dashboard/Showempleaves'
import ShowManagerDetails from './ProjectTest/Dashboard/ShowManagerDetails'
import ShowMyempLeaves from './ProjectTest/Dashboard/ShowMyempLeaves'
import ForgotPassword from './ProjectTest/ForgotPassword';

export default class App extends React.Component{
  render(){

    return(
      <BrowserRouter>

      <div >
      
      <Routes>
        <Route path="/AllEmployees" element={<Welcome/>}>Home</Route>
        <Route path="/" element={<Login />}>Login</Route>
        <Route path="/ApplyLeave" element={<ApplyLeave/>}>ApplyLeave</Route>
        <Route path='/ForgotPassword' element={<ForgotPassword />}>ForgotPassword</Route>
        <Route path="/DashBoard/:id" element={<Dashboard  />}>DashBoard</Route>
        <Route path="/EmployeeDetails" element={<EmployeeDetails/>}>EmployeeDetails</Route>
        <Route path="/ShowMyempLeaves" element={<ShowMyempLeaves/>}>ShowMyempLeaves</Route>
        <Route path="/ShowManagerDetails" element={<ShowManagerDetails/>}>showManagerDetails</Route>
        <Route path="/Showempleaves" element={<Showempleaves/>}>Showempleaves</Route>
      </Routes>
      
      </div>
      </BrowserRouter>



    )
  }
}