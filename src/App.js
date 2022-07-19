import logo from './logo.svg';
import './App.css';
import Message from "./Message";
import StateEx from './AfternoonPracc/StateEx';
import Hiding from './AfternoonPracc/Hide&show';
import Life from './AfternoonPracc/LifeCycle';
import Trial from "./AfternoonPracc/Trial"
import App2 from './ProjectTest/App2';
import Welcome from './ProjectTest/Welcome';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './ProjectTest/Login';
import ApplyLeave from './ProjectTest/ApplyLeave';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      
      <Routes>
        <Route path="/" element={<Welcome />}>Home</Route>
        <Route path="/Login" element={<Login  />}>Login</Route>
        <Route path="/ApplyLeave" element={<ApplyLeave/>}>ApplyLeave</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
